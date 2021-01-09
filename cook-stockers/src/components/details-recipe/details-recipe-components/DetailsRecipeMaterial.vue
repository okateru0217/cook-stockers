<template>
  <div class="new-recipe-material__container">
    <div class="new-recipe-material__wrap">
      <div class="new-recipe-material__item">
        <div class="new-recipe-material__ttl">
          <h3>材料</h3>
        </div><!-- new-recipe-material__ttl -->
        <div class="new-recipe-material__table">
          <table>
            <tbody>
              <tr v-for="items in this.$store.state.recordRecipe.materialArr"
              :key="items.id">
                <td 
                class="new-recipe-material__material-td">
                <p>{{ items.material }}</p></td>
                <td
                class="new-recipe-material__quantity-td">
                <p>{{ items.quantity }}</p></td>
                <td><button 
                @click="editItems(items)"
                class="new-recipe-material__edit-btn"><font-awesome-icon icon='edit' /></button></td>
                <td><button 
                @click="deleteItems(items)"
                class="new-recipe-material__delete-btn"><font-awesome-icon icon='trash-alt' /></button></td>
              </tr>
            </tbody>
          </table>
        </div><!-- new-recipe-material__table -->
        <div class="new-recipe-material__input">
          <input 
          type="text" 
          placeholder="材料名" 
          class="new-recipe-material__material-input"
          v-model="materialValue"
          ref="editor">
          <input 
          type="text" 
          placeholder="量" 
          class="new-recipe-material__quantity-input"
          v-model="quantityValue">
        </div><!-- new-recipe-material__input -->
        <div class="new-recipe-material__add-btn">
          <button 
          @click="setItems"
          :class="{add: onAddBtn, edit: !onAddBtn}">{{ chengeOverAddEdit }}</button>
        </div><!-- new-recipe-material__add-btn -->
      </div><!-- new-recipe-material__item -->
    </div><!-- new-recipe-material__wrap -->
  </div><!-- new-recipe-material__container -->
</template>

<script>
export default {
  data() {
    return {
      // 材料名入力
      materialValue: '',
      // 量入力
      quantityValue: '',
      // 編集時のインデックスを取得する
      editIndex: '',
      // ボタンの初期表示
      chengeOverAddEdit: '＋ 追加',
      // ボタン色の切り替え
      onAddBtn: true
    }
  },
  methods: {
    // アイテムの追加、編集を行う
    setItems() {
      // アイテムの追加
      if (this.chengeOverAddEdit === '＋ 追加'){
        this.$store.state.recordRecipe.materialArr.push({
          id: this.$store.state.recordRecipe.materialArr.length,
          material: this.materialValue,
          quantity: this.quantityValue
        })
      // アイテムの編集
      } else {
        this.$store.state.recordRecipe.materialArr[this.editIndex].material = this.materialValue;
        this.$store.state.recordRecipe.materialArr[this.editIndex].quantity = this.quantityValue;
        this.chengeOverAddEdit = '＋ 追加';
        this.onAddBtn = true;
      }
      // ボタン押下後、入力欄を空にする
      this.materialValue = '';
      this.quantityValue = '';
    },
    // アイテムを削除する
    deleteItems(items) {
      this.$store.state.recordRecipe.materialArr.splice(items.id, 1);
      for (let i = items.id; i < this.$store.state.recordRecipe.materialArr.length; i++) {
        this.$store.state.recordRecipe.materialArr[i].id = i;
      }
      this.materialValue = '';
      this.quantityValue = '';
      this.chengeOverAddEdit = '＋ 追加';
      this.onAddBtn = true;
    },
    // アイテム編集の準備
    editItems(items) {
      // 入力欄にアイテムを入れる
      this.materialValue = items.material;
      this.quantityValue = items.quantity;
      // テーブルのIDを取得
      this.editIndex = items.id;
      // フォーカスを指定
      this.$refs.editor.focus();
      if (this.chengeOverAddEdit === '＋ 追加') {
        this.chengeOverAddEdit = '編集';
        this.onAddBtn = false;
      } else {
        this.chengeOverAddEdit = '＋ 追加';
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

.new-recipe-material__wrap {
  background-color: #FFF;
}

.new-recipe-material__ttl {

  h3 {
    padding-top: 30px;
    font-weight: normal;
  }
}

.new-recipe-material__table {
  display: flex;
  justify-content: space-around;

  table {
    width: 90%;
  }

  td {
    width: 26px;
    padding: 0;
  }

  button {
    margin: 0;
  }

  button:hover {
    opacity: 0.7;
  }

  .new-recipe-material__delete-btn {
    color: #FFF;
    background-color: #FF7F50;
    border: 1px solid #FF7F50;
  }

  .new-recipe-material__edit-btn {
    color: #FFF;
    background-color: #00cc33;
    border: 1px solid #00cc33;
  }

  p {
    margin: 0 0 10px 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid #C1C1C1;
  }
}

.new-recipe-material__input {
  display: flex;
  justify-content: space-around;

  input {
    outline: none;
    padding-bottom: 5px;
    border: none;
    border-bottom: 1px solid #C1C1C1;
  }
}

.new-recipe-material__add-btn {
  text-align: center;
  padding: 10px 0;

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
  .new-recipe-material__ttl {

    h3 {
      padding-left: 20px;
    }
  }

  .new-recipe-material__table {

    input {
      margin-bottom: 10px;
    }

    button {
      font-size: 0.8em;
    }

    .new-recipe-material__material-td {
      width: 60vw;
    }

    .new-recipe-material__quantity-td {
      width: 20vw;
    }
  }

  .new-recipe-material__input {
    width: 90%;
    margin: 0 auto;
    margin-top: 30px;

    input {
      margin-bottom: 10px;
    }

    .new-recipe-material__material-input {
      width: 80%;
      margin-right: 20px;
    }

    .new-recipe-material__quantity-input {
      width: 33%;
    }
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .new-recipe-material__ttl {

    h3 {
      padding-left: 20px;
    }
  }

  .new-recipe-material__table {

    input {
      margin-bottom: 20px;
    }

    .new-recipe-material__material-td {
      width: 60vw;
    }

    .new-recipe-material__quantity-td {
      width: 20vw;
    }
  }

  .new-recipe-material__input {
    width: 90%;
    margin: 0 auto;
    margin-top: 30px;

    input {
      margin-bottom: 10px;
    }

    .new-recipe-material__material-input {
      width: 80%;
      margin-right: 20px;
    }

    .new-recipe-material__quantity-input {
      width: 33%;
    }
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .new-recipe-material__ttl {

    h3 {
      margin-top: 0;
      padding-top: 30px;
      padding-left: 30px;
    }
  }

  .new-recipe-material__table {

    input {
      margin-bottom: 20px;
    }

    .new-recipe-material__material-td {
      width: 32vw;
    }

    .new-recipe-material__material-input {
      width: 90%;
    }

    .new-recipe-material__quantity-td {
      width: 10vw;
    }

    .new-recipe-material__quantity-input {
      width: 60%;
    }
  }

  .new-recipe-material__input {
    width: 90%;
    margin: 0 auto;
    margin-top: 30px;

    input {
      margin-bottom: 10px;
    }

    .new-recipe-material__material-input {
      width: 80%;
      margin-right: 20px;
    }

    .new-recipe-material__quantity-input {
      width: 33%;
    }
  }
}
</style>