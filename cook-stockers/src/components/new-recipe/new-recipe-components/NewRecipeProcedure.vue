<template>
  <div class="new-recipe-procedure__container">
    <div class="new-recipe-procedure__wrap">
      <div class="new-recipe-procedure__item">
        <div class="new-recipe-procedure__ttl">
          <h3>手順</h3>
        </div><!-- new-recipe-procedure__ttl -->
        <div class="new-recipe-procedure__table">
          <table
          v-if="$store.state.recordRecipe.switcherAddEditBtn === true">
            <tr v-for="procedures in this.$store.state.recordRecipe.procedureArr"
            :key="procedures.id">
              <td class="new-recipe-procedure__index"><i>{{ procedures.id + 1 }}</i></td>
              <td class="new-recipe-procedure__procedure"><p>{{ procedures.procedure }}</p></td>
              <td class="new-recipe-procedure__button"><button 
              @click="editProcedure(procedures)"
              class="new-recipe-procedure__edit-btn"><font-awesome-icon icon='edit' /></button></td>
              <td class="new-recipe-procedure__button"><button 
              @click="deleteProcedure(procedures)"
              class="new-recipe-procedure__delete-btn"><font-awesome-icon icon='trash-alt' /></button></td>
            </tr>
          </table>
          <table
          v-else>
            <tr v-for="procedures in this.$store.state.editingRecipe.editingRecipeProcedure"
            :key="procedures.id">
              <td class="new-recipe-procedure__index"><i>{{ procedures.recipe_procedure_index + 1 }}</i></td>
              <td class="new-recipe-procedure__procedure"><p>{{ procedures.recipe_procedure }}</p></td>
              <td class="new-recipe-procedure__button"><button 
              @click="editProcedure(procedures)"
              class="new-recipe-procedure__edit-btn"><font-awesome-icon icon='edit' /></button></td>
            </tr>
          </table>
        </div><!-- new-recipe-procedure__table -->
        <div class="new-recipe-procedure__input">
          <input 
          type="text"
          placeholder="手順"
          v-model="procedureValue"
          ref="editor"
          >
        </div><!-- new-recipe-procedure__input -->
        <div class="new-recipe-procedure__add-btn">
          <button
          @click="setProcedure"
          :class="{add: onAddBtn, edit: !onAddBtn}">{{ chengeOverBtn }}</button>
        </div><!-- new-recipe-procedure__add-btn -->
      </div><!-- new-recipe-procedure__item -->
    </div><!-- new-recipe-procedure__wrap -->
  </div><!-- new-recipe-procedure__container -->
</template>

<script>
export default {
  data() {
    return {
      // 手順を入力
      procedureValue: '',
      // 編集時のインデックスを取得する
      editIndex: '',
      // ボタンの初期表示
      chengeOverBtn: '＋ 追加',
      // ボタンの切り替え
      onAddBtn: true
    }
  },
  methods: {
    // 手順を追加、編集する
    setProcedure() {
      // 手順登録作業時の編集時の挙動
      if (this.$store.state.recordRecipe.switcherAddEditBtn === true){
        // 手順を追加する
        if (this.chengeOverBtn === '＋ 追加') {
          this.$store.state.recordRecipe.procedureArr.push({
            id: this.$store.state.recordRecipe.procedureArr.length,
            procedure: this.procedureValue
          })
        // 手順を編集する
        } else {
          this.$store.state.recordRecipe.procedureArr[this.editIndex].procedure = this.procedureValue;
          this.chengeOverBtn = '＋ 追加';
          this.onAddBtn = true;
        }
      // 手順編集作業時の編集時の挙動
      } else {
        // 手順の追加
        if (this.chengeOverBtn === '＋ 追加'){
          this.$store.state.editingRecipe.editingRecipeProcedure.push({
            recipe_procedure_id: this.$store.state.editingRecipe.editingRecipeProcedure.length,
            recipe_procedure: this.procedureValue
          })
        // 手順の編集
        } else {
          this.$store.state.editingRecipe.editingRecipeProcedure[this.editIndex].recipe_procedure = this.procedureValue;
          this.chengeOverBtn = '＋ 追加';
          this.onAddBtn = true;
        }
      }
      // 入力欄を空にする
      this.procedureValue = '';
    },
    // 手順を削除する
    deleteProcedure(procedures) {
      this.$store.state.recordRecipe.procedureArr.splice(procedures.id, 1);
      for(let i = procedures.id; i < this.$store.state.recordRecipe.procedureArr.length; i++) {
        this.$store.state.recordRecipe.procedureArr[i].id = i;
      }
      this.procedureValue = '';
      this.chengeOverBtn = '＋ 追加';
      this.onAddBtn = true;
    },
    // 手順を編集するために、ボタンの見た目を変える
    editProcedure(procedures) {
      // 手順登録作業時の編集時の挙動
      if (this.$store.state.recordRecipe.switcherAddEditBtn === true){
        // 入力値に手順を入れる
        this.procedureValue = procedures.procedure;
        // テーブルのIDを取得
        this.editIndex = procedures.id;
      // 手順編集作業時の編集時の挙動
      } else {
        // 入力欄に手順を入れる
        this.procedureValue = procedures.recipe_procedure;
        // テーブルのIDを取得
        this.editIndex = procedures.recipe_procedure_index;
      }
      this.$refs.editor.focus();
      if (this.chengeOverBtn === '＋ 追加') {
        this.chengeOverBtn = '編集';
        this.onAddBtn = false;
      } else {
        this.chengeOverBtn = '＋ 追加';
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

.new-recipe-procedure__wrap {
  background-color: #FFF;
}

.new-recipe-procedure__ttl {

  h3 {
    padding-top: 30px;
    font-weight: normal;
  }
}

.new-recipe-procedure__table {
  width: 90%;
  margin: 0 auto;

  table {
    width: 100%;
  }

  button {
    margin: 0;
  }

  button:hover {
    opacity: 0.7;
  }

  .new-recipe-procedure__index {
    width: 1em;
    padding-bottom: 12px;
  }

  .new-recipe-procedure__delete-btn {
    color: #FFF;
    background-color: #FF7F50;
    border: 1px solid #FF7F50;
  }

  .new-recipe-procedure__edit-btn {
    color: #FFF;
    background-color: #00cc33;
    border: 1px solid #00cc33;
  }

  p {
    margin: 0 0 10px 0;
    padding-bottom: 5px;
    border-bottom: 1px solid #C1C1C1;
  }
}

.new-recipe-procedure__button {
  width: 26px;
}

.new-recipe-procedure__input {
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;

  input {
    outline: none;
    width: 100%;
    margin-bottom: 10px;
    padding-bottom: 5px;
    border: none;
    border-bottom: 1px solid #C1C1C1;
  }
}

.new-recipe-procedure__add-btn {
  text-align: center;
  padding: 10px 0 40px 0;

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

// sp用
@media screen and (max-width: 767px) {
  .new-recipe-procedure__ttl {

    h3 {
      padding-left: 20px;
    }
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .new-recipe-procedure__ttl {

    h3 {
      padding-left: 20px;
    }
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .new-recipe-procedure__ttl {

    h3 {
      margin-top: 0;
      padding-top: 30px;
      padding-left: 30px;
    }
  }
}
</style>