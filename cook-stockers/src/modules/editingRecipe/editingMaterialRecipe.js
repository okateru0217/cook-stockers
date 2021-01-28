import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/storage";
import 'firebase/firebase-firestore'

export default {
  state: {
    // レシピ削除用配列
    editingMaterialDeleteArr: [],
  },
  actions: {
     // 「編集する(DB登録)」ボタン押下時の処理
    recipeRecord() {
      if (!this.state.recordRecipe.switcherAddEditBtn) {
        // 大元のコレクションパス
        const editingMaterialData = firebase.firestore()
        .collection('users-information').doc(this.state.signin.signInData.uid)
        .collection('recipe').doc(this.state.detailsRecipe.recipeId)
        .collection('material');
        // 一度更地にする
        this.state.editingRecipe.editingRecipeMaterial.forEach(editingRecipeMaterial => {
          // 一括削除用コレクションパス
          const allDeleteMaterialData = editingMaterialData.doc(editingRecipeMaterial.recipe_material_id);
          // 一括削除実行
          allDeleteMaterialData.delete();
          // 削除した要素を参照しDBから削除する
          this.state.editingMaterialRecipe.editingMaterialDeleteArr.forEach(editingMaterialDeleteArr => {
            const displayDeleteMaterialData = editingMaterialData.doc(editingMaterialDeleteArr.recipe_material_id);
            displayDeleteMaterialData.delete();
          }) 
          // 表示用配列をDBに追加
          const setMaterialData = editingMaterialData.doc();
          setMaterialData.set({
            recipe_id: this.state.detailsRecipe.recipeId,
            recipe_material_id: setMaterialData.id,
            recipe_material_index: editingRecipeMaterial.recipe_material_index,
            recipe_material: editingRecipeMaterial.recipe_material,
            recipe_quantity: editingRecipeMaterial.recipe_quantity
          })
        })
      }
    }
  }
}