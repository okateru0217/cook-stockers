import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/storage";
import 'firebase/firebase-firestore'

export default {
  state: {
    // 手順削除用配列
    editingProcedureDeleteArr: []
  },
  actions: {
     // 「編集する(DB登録)」ボタン押下時の処理
    recipeRecord() {
      if (!this.state.recordRecipe.switcherAddEditBtn) {
        // 大元のコレクションパス
        const editingProcedureData = firebase.firestore()
        .collection('users-information').doc(this.state.signin.signInData.uid)
        .collection('recipe').doc(this.state.detailsRecipe.recipeId)
        .collection('procedure');
        // 一度更地にする
        this.state.editingRecipe.editingRecipeProcedure.forEach(editingRecipeProcedure => {
          // 一括削除用コレクションパス
          const allDeleteProcedureData = editingProcedureData.doc(editingRecipeProcedure.recipe_procedure_id);
          // 一括削除実行
          allDeleteProcedureData.delete();
          // 削除した要素を参照しDBから削除する
          this.state.editingProcedureRecipe.editingProcedureDeleteArr.forEach(editingProcedureDeleteArr => {
            const displayDeleteProcedureData = editingProcedureData.doc(editingProcedureDeleteArr.recipe_procedure_id);
            displayDeleteProcedureData.delete();
          })
          // 表示用配列をDBに追加
          const setProcedureData = editingProcedureData.doc();
          setProcedureData.set({
            recipe_id: this.state.detailsRecipe.recipeId,
            recipe_procedure_id: setProcedureData.id,
            recipe_procedure_index: editingRecipeProcedure.recipe_procedure_index,
            recipe_procedure: editingRecipeProcedure.recipe_procedure
          })
        })
      }
    }
  }
}