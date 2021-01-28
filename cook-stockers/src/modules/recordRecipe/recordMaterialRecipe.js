import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/storage";
import 'firebase/firebase-firestore'

export default {
  actions: {
    // 「登録する」ボタン押下時、cloud firestoreへ登録  
    recipeRecord() {
      // 「材料」「量」が格納された配列を取り出す
      this.state.recordRecipe.materialArr.forEach(items => {
        // 「材料」「量」を格納するためのコレクションパス
        const recordMaterialQuantity = firebase.firestore()
        .collection('users-information').doc(this.state.signin.signInData.uid)
        .collection('recipe').doc(this.state.recordRecipe.recordRecipeId)
        .collection('material').doc();
        // 「材料」「量」入力値をcloud firestoreへ登録
        recordMaterialQuantity.set({
          recipe_id: this.state.recordRecipe.recordRecipeId,
          recipe_material_id: recordMaterialQuantity.id,
          recipe_material_index: items.id,
          recipe_material: items.material,
          recipe_quantity: items.quantity,
        })
      })
      // 配列を空にする
      this.state.recordRecipe.materialArr.length = 0;
    }
  }
}