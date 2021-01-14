import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/storage";
import 'firebase/firebase-firestore'

export default {
  actions: {
    displayDetailsRecipe() {
      // 大元のコレクションパス
      const detailsRecipeData = firebase.firestore()
      .collection('users-information').doc(this.state.signin.signInData.uid)
      .collection('recipe').doc(this.state.detailsRecipe.recipeId);
      // 「手順」が格納されたコレクションパス
      const detailsRecipePrcedure = detailsRecipeData.collection('procedure');
      // 「手順」を配列に格納
      detailsRecipePrcedure.get().then(procedure => {
        // 一度配列を空にする
        this.state.detailsRecipe.recipeProcedureArr.length = 0;
        procedure.forEach(docs => {
          this.state.detailsRecipe.recipeProcedureArr.push(docs.data());
        })
        // 配列をindex番号順に入れ替える
        this.state.detailsRecipe.recipeProcedureArr.sort((a, b) => {
          return (a.recipe_procedure_index < b.recipe_procedure_index ? -1 : 1);
        })
      })
    }
  }
}