import router from '../../router'
import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/storage";
import 'firebase/firebase-firestore'

export default {
  state: {
    // レシピ名編集用
    editingRecipeName: '',
    // レシピメモ編集用
    editingRecipeMemo: '',
    // レシピ外部サイト編集用
    editingRecipeUrl: '',
    // レシピ材料, 量編集用
    editingRecipeMaterial: '',
    // レシピ手順編集用
    editingRecipeProcedure: '',
    // レシピタグ編集用
    editingRecipeTag: '',
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
      this.state.editingRecipe.editingRecipeMaterial = this.state.detailsRecipe.recipeMaterialArr;
      this.state.editingRecipe.editingRecipeProcedure = this.state.detailsRecipe.recipeProcedureArr;
      this.state.editingRecipe.editingRecipeTag = this.state.detailsRecipe.recipeTagArr;
    },
    // 「編集する(DB登録)」ボタン押下時の処理
    recipeRecord() {
      if (this.state.recordRecipe.switcherAddEditBtn === false) {
        // 大元のコレクションパス
        const editingRecipeData = firebase.firestore()
        .collection('users-information').doc(this.state.signin.signInData.uid)
        .collection('recipe').doc(this.state.detailsRecipe.recipeId);
        // 編集した「レシピ名」「メモ」「Url」をDBに反映
        editingRecipeData.update({
          recipe_name: this.state.editingRecipe.editingRecipeName,
          recipe_memo: this.state.editingRecipe.editingRecipeMemo,
          recipe_Url: this.state.editingRecipe.editingRecipeUrl
        })
      }
    }
  }
}