<template>
  <div class="new-recipe-tag__container">
    <div class="new-recipe-tag__wrap">
      <div class="new-recipe-tag__item">
        <div class="new-recipe-tag__ttl">
          <h3>タグ追加</h3>
        </div><!-- new-recipe-tag__ttl -->
        <div class="new-recipe-tag__table">
          <table
          v-if="$store.state.recordRecipe.switcherAddEditBtn === true">
            <tbody>
              <tr
              v-for="tags in this.$store.state.recordRecipe.tagArr"
              :key="tags.id">
                <td><p @click="chengeStatusTag(tags)">{{ tags.tag }}</p></td>
              </tr>
            </tbody>
          </table>
          <table
          v-else>
            <tbody>
              <tr
              v-for="tags in this.$store.state.editingRecipe.editingRecipeTag"
              :key="tags.id">
                <td><p @click="chengeStatusTag(tags)">{{ tags.recipe_tag }}</p></td>
              </tr>
            </tbody>
          </table>
        </div><!-- new-recipe-tag__table -->
        <div class="new-recipe-tag__add-tag">
          <input 
          type="text" 
          placeholder="タグを追加"
          v-model="tagValue"
          ref="editor">
          <button @click="addTag"
          :class="{add: onAddBtn, edit: !onAddBtn}">{{ chengeOverAddTask }}</button>
          <button
          class="new-recipe-tag__delete-btn"
          @click="deleteTag(tags)"
          v-show="!onAddBtn">削除</button>
        </div><!-- new-recipe-tag__add-tag -->
      </div><!-- new-recipe-tag__item -->
    </div><!-- new-recipe-tag__wrap -->
  </div><!-- new-recipe-tag__container -->
</template>

<script>
export default {
  data() {
    return {
      // タグを入力
      tagValue: '',
      // 編集時のインデックスを取得する
      editIndex: '',
      // ボタンの初期表示
      chengeOverAddTask: '＋ 追加',
      // ボタンの切り替え
      onAddBtn: true
    }
  },
  methods: {
    // タグを追加、編集を行う
    addTag() {
      // タグ登録作業時の編集時の挙動
      if (this.$store.state.recordRecipe.switcherAddEditBtn === true){
        // タグの追加
        if (this.chengeOverAddTask === '＋ 追加') {
          this.$store.state.recordRecipe.tagArr.push({
            id: this.$store.state.recordRecipe.tagArr.length,
            tag: this.tagValue
          })
        // タグの編集
        } else {
          this.$store.state.recordRecipe.tagArr[this.editIndex].tag = this.tagValue;
          this.chengeOverAddTask = '＋ 追加';
          this.onAddBtn = true;
        }
      } else {
        // タグの追加
        if (this.chengeOverAddTask === '＋ 追加') {
          this.$store.state.editingRecipe.editingRecipeTag.push({
            recipe_tag_index: this.$store.state.editingRecipe.editingRecipeTag.length,
            recipe_tag: this.tagValue
          })
          // DBに追加するようの配列に入れる
          this.$store.state.editingTagRecipe.editingTagAddArr.push({
            recipe_tag_index: this.$store.state.editingRecipe.editingRecipeTag.length -1,
            recipe_tag: this.tagValue
          })
        // タグの編集
        } else {
          this.$store.state.editingRecipe.editingRecipeTag[this.editIndex].recipe_tag = this.tagValue;
          // 編集後の値をDBに反映させる際に用いる配列に追加
          this.$store.state.editingTagRecipe.editingTagEditArr.push({
            recipe_tag_index: this.$store.state.editingRecipe.editingRecipeTag[this.editIndex].recipe_tag_index,
            recipe_tag: this.$store.state.editingRecipe.editingRecipeTag[this.editIndex].recipe_tag
          })
          this.chengeOverAddTask = '＋ 追加';
          this.onAddBtn = true;
        }
      }
      this.tagValue = '';
    },
    // タグを削除する
    deleteTag(tags) {
      if (this.$store.state.recordRecipe.switcherAddEditBtn === true){
        this.$store.state.recordRecipe.tagArr.splice(this.editIndex, 1);
        for (let i = this.editIndex; i < this.$store.state.recordRecipe.tagArr.length; i++) {
          this.$store.state.recordRecipe.tagArr[i].id = i;
        }
      } else {
        this.$store.state.editingRecipe.editingRecipeTag.splice(tags.recipe_tag_index, 1);
        // DBを削除する用の配列に入れる
        this.$store.state.editingTagRecipe.editingTagDeleteArr.push(tags);
        // 削除時にindexを0から並び替える
        for (let i = tags.recipe_tag_index; i < this.$store.state.editingRecipe.editingRecipeTag.length; i++) {
          this.$store.state.editingRecipe.editingRecipeTag[i].recipe_tag_index = i;
          for (let tagIndex = 0; tagIndex < this.$store.state.editingTagRecipe.editingTagAddArr.length; tagIndex++) {
            // 追加用の配列のindexと削除時の配列のindexとを合わせる
            if (this.$store.state.editingRecipe.editingRecipeTag[i].recipe_tag === this.$store.state.editingTagRecipe.editingTagAddArr[tagIndex].recipe_tag) {
              this.$store.state.editingTagRecipe.editingTagAddArr[tagIndex].recipe_tag_index = this.$store.state.editingRecipe.editingRecipeTag[i].recipe_tag_index
            }
          }
        }
      }
      this.tagValue = '';
      this.chengeOverAddTask = '＋ 追加';
      this.onAddBtn = true;
    },
    // タグのステータスを変更するためのボタンを出現させる
    chengeStatusTag(tags) {
      // タグ登録作業時の編集時の挙動
      if (this.$store.state.recordRecipe.switcherAddEditBtn === true){
        // 入力欄にタグを入れる
        this.tagValue = tags.tag;
        // テーブルのIDを取得
        this.editIndex = tags.id;
      } else {
        // 入力欄にタグを入れる
        this.tagValue = tags.recipe_tag;
        // テーブルのIDを取得
        this.editIndex = tags.recipe_tag_index;
      }
      // フォーカスを指定
      this.$refs.editor.focus();
      if (this.chengeOverAddTask === '＋ 追加') {
        this.chengeOverAddTask = '編集';
        this.onAddBtn = false;
      } else {
        this.chengeOverAddTask = '＋ 追加';
        this.onAddBtn = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// 共通スタイル
* {
  font-family: 'Raleway', sans-serif;
}

.new-recipe-tag__wrap {
  background-color: #FFF;
}

.new-recipe-tag__ttl {

  h3 {
    padding: 30px 0 0 20px;
    font-weight: normal;
  }
}

.new-recipe-tag__table {
  width: 90%;
  margin: 0 auto;
  padding-bottom: 5px;
  border-bottom: 1px solid #C1C1C1;
  white-space: nowrap;
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  tbody {
    display: flex;
  }

  p {
    text-align: center;
    margin: 0;
    padding: 5px 10px;
    border: 1px solid #FCBB0A;
    color: #FCBB0A;
  }
}

.new-recipe-tag__table::-webkit-scrollbar {
  display:none;
}

.new-recipe-tag__add-tag {
  width: 90%;
  margin: 0 auto;
  padding-top: 30px;

  input {
    outline: none;
    border: none;
    border-bottom: 1.5px solid #FCBB0A;
  }

  button {
    cursor: pointer;
    outline: none;
    padding: 5px 15px;
    border-radius: 50px;
    transition: 0.3s;
  }
}

.add {
  color: #FCBB0A;
  border: 1px solid #FCBB0A;
  background-color: #FFF;
}

.add:hover {
  color: #FFF;
  border: 1px solid #FCBB0A;
  background-color:#FCBB0A;
}

.edit {
  color: #FFF;
  border: 1px solid #00cc33;
  background-color: #00cc33;
}

.edit:hover {
  color: #00cc33;
  border: 1px solid#00cc33;
  background-color: #FFF;
}

.new-recipe-tag__delete-btn {
  color: #FFF;
  border: 1px solid #FF7F50;
  background-color: #FF7F50;
}

.new-recipe-tag__delete-btn:hover {
  color: #FF7F50;
  border: 1px solid#FF7F50;
  background-color: #FFF;
}

// sp用
@media screen and (max-width: 767px) {
  .new-recipe-tag__add-tag {
    padding-bottom: 30px;

    input {
      width: 45vw;
      margin-right: 5vw;
    }

    button {
      margin: 0 5px;
    }
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .new-recipe-tag__add-tag {
    padding-bottom: 30px;

    input {
      width: 45vw;
      margin-right: 5vw;
    }

    button {
      margin: 0 5px;
    }
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .new-recipe-tag__wrap {
    padding-bottom: 40px;
  }

  .new-recipe-tag__ttl {

    h3 {
      margin: 0 0 50px 0;
    }
  }

  .new-recipe-tag__add-tag { 

    input {
      width: 12.5vw;
    }

    button {
      margin: 0;
    }
  }
}
</style>