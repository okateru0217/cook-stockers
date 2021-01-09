import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/storage";
import 'firebase/firebase-firestore'

export default {
  state: {
    detailsRecipeArr: []
  },
  actions: {
    createDetailsRecipe() {
      firebase.auth().onAuthStateChanged((user)=> {
        // ゲストログイン時の処理
        if (user === null) {
          this.state.signin.signInData.uid = 'guest';
          const recipeDataGuestArr = firebase.firestore()
          .collection('users-information').doc(this.state.signin.signInData.uid)
          .collection('recipe');
          recipeDataGuestArr.get().then(snapshot => {
            // 一度配列を空にする
            this.state.recordRecipe.recipeArr.length = 0;
            snapshot.forEach(docs => {
              this.state.recordRecipe.recipeArr.push(docs.data());
            })
          })
        // メールアドレスログイン時の処理
        } else {
          this.state.signin.signInData.uid = user.uid;
          const recipeDataArr = firebase.firestore()
          .collection('users-information').doc(this.state.signin.signInData.uid)
          .collection('recipe');
          recipeDataArr.get().then(snapshot => {
            // 一度配列を空にする
            this.state.recordRecipe.recipeArr.length = 0;
            snapshot.forEach(docs => {
              this.state.recordRecipe.recipeArr.push(docs.data());
            })
          })
        }
      })
    }
  }
}