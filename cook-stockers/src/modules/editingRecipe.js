import router from '../router'

export default {
  state: {
    // レシピ名編集用
    editingRecipeName: '',
    // レシピメモ編集用
    editingRecipeMemo: '',
    // レシピ外部サイト編集用
    editingRecipeUrl: ''
  },
  actions: {
     // 「レシピを編集(画面遷移)」ボタンを押下時の処理
    editingRecipe() {
      router.push('/newrecipe');
      this.state.recordRecipe.switcherAddEditBtn = false;
      // 画面遷移時、stateにv-model用のレシピ情報を記述
      this.state.editingRecipe.editingRecipeName = this.state.detailsRecipe.recipeName;
      this.state.editingRecipe.editingRecipeMemo = this.state.detailsRecipe.recipeMemo;
      this.state.editingRecipe.editingRecipeUrl = this.state.detailsRecipe.recipeUrl;
    },
    // 「編集する(DB登録)」ボタン押下時の処理
    recipeRecord() {
      if (this.state.recordRecipe.switcherAddEditBtn === false) {
        console.log(this.state.recordRecipe.switcherAddEditBtn);
      }
    }
  }
}