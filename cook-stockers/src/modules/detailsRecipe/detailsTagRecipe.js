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
      // 「タグ」が格納されたコレクションパス
      const detailsRecipeTag = detailsRecipeData.collection('tag');
      // 「タグ」を配列に格納
      detailsRecipeTag.get().then(tags => {
        // 一度配列を空にする
        this.state.detailsRecipe.recipeTagArr.length = 0;
        tags.forEach(docs => {
          this.state.detailsRecipe.recipeTagArr.push(docs.data());
        })
        // 配列をindex番号順に入れ替える
        this.state.detailsRecipe.recipeTagArr.sort((a, b) => {
          return (a.recipe_tag_index < b.recipe_tag_index ? -1 : 1);
        })
      })
    }
  }
}