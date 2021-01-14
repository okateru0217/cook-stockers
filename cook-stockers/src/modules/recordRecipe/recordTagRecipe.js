import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/storage";
import 'firebase/firebase-firestore'

export default {
  actions: {
    // 「登録する」ボタン押下時、cloud firestoreへ登録  
    recipeRecord() {
      // 「タグ」が格納された配列を取り出す
      this.state.recordRecipe.tagArr.forEach(items => {
        // 「タグ」を格納するためのコレクションパス
        const recordTag = firebase.firestore()
        .collection('users-information').doc(this.state.signin.signInData.uid)
        .collection('recipe').doc(this.state.recordRecipe.recordRecipeId)
        .collection('tag').doc();
        // 「タグ」入力値をcloud firestoreへ登録
        recordTag.set({
          recipe_tag_id: recordTag.id,
          recipe_tag_index: items.id,
          recipe_tag: items.tag
        })
        // myrecipeに表示させるためにcloud firestoreの情報を格納
        .then(() => {
          const recipeDataArr = firebase.firestore().
          collection('users-information').doc(this.state.signin.signInData.uid)
          .collection('recipe');
          recipeDataArr.get().then(snapshot => {
            this.state.recordRecipe.recipeArr.length = 0;
            snapshot.forEach(docs => {
              this.state.recordRecipe.recipeArr.push(docs.data());
            })
          })
        })
      })
    }
  }
}