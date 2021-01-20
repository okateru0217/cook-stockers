import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/storage";
import 'firebase/firebase-firestore'

export default {
  actions: {
    // 「登録する」ボタン押下時、cloud firestoreへ登録  
    recipeRecord() {
      // 「手順」が格納された配列を取り出す
      this.state.recordRecipe.procedureArr.forEach(items => {
        // 「手順」を格納するためのコレクションパス
        const recordProcedure = firebase.firestore()
        .collection('users-information').doc(this.state.signin.signInData.uid)
        .collection('recipe').doc(this.state.recordRecipe.recordRecipeId)
        .collection('procedure').doc();
        // 「手順」入力値をcloud firestoreへ登録
        recordProcedure.set({
          recipe_procedure_id: recordProcedure.id,
          recipe_procedure_index: items.id, 
          recipe_procedure: items.procedure
        })
      })
      // 配列を空にする
      this.state.recordRecipe.procedureArr.length = 0;
    }
  }
}