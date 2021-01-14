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
      // 「材料」「量」が格納されたコレクションパス
      const detailsRecipeMaterial = detailsRecipeData.collection('material');
      // 「材料」「量」を配列に格納
      detailsRecipeMaterial.get().then(items => {
        // 一度配列を空にする
        this.state.detailsRecipe.recipeMaterialArr.length = 0;
        items.forEach(docs => {
          this.state.detailsRecipe.recipeMaterialArr.push(docs.data());
        })
        // 配列をindex番号順に入れ替える
        this.state.detailsRecipe.recipeMaterialArr.sort((a, b) => {
          return (a.recipe_material_index < b.recipe_material_index ? -1 : 1);
        })
      })
    }
  }
}