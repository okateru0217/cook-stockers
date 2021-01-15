import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/storage";
import 'firebase/firebase-firestore'

export default {
  state: {
    // 手順追加用配列
    editingProcedureAddArr: [],
    // 手順編集用配列
    editingProcedureEditArr: [],
    // 手順削除用配列
    editingProcedureDeleteArr: []
  },
  actions: {
     // 「編集する(DB登録)」ボタン押下時の処理
    recipeRecord() {
      if (this.state.recordRecipe.switcherAddEditBtn === false) {
        // 大元のコレクションパス
        const editingRecipeData = firebase.firestore()
        .collection('users-information').doc(this.state.signin.signInData.uid)
        .collection('recipe').doc(this.state.detailsRecipe.recipeId);
        // 編集した「手順」をDBに反映
        this.state.editingRecipe.editingRecipeProcedure.forEach(element => {
          // 「手順」のコレクションパス
          const editingRecipeProcedureData = editingRecipeData
          .collection('procedure').doc(element.recipe_procedure_id);
          editingRecipeProcedureData.get().then(snapshot => {
            // 編集後の連想配列とDBのindex番号が同じである場合、「手順」を更新する
            if (element.recipe_procedure_id !== undefined){
              if (snapshot.data().recipe_procedure_id === element.recipe_procedure_id) {
                editingRecipeProcedureData.update({
                  recipe_procedure: element.recipe_procedure
                })
              }
            }
          })
        })
        // 編集後、新たに「手順」が追加されていた場合、DBにそれを追加する
        this.state.editingProcedureRecipe.editingProcedureAddArr.forEach(element => {
          const addRecipeProcedureData = editingRecipeData
          .collection('procedure').doc();
          // DBに追加する
          addRecipeProcedureData.set({
            recipe_procedure_id: addRecipeProcedureData.id,
            recipe_procedure_index: element.recipe_procedure_index,
            recipe_procedure: element.recipe_procedure
          })
          // 配列を空にする
          this.state.editingProcedureRecipe.editingProcedureAddArr.length = 0;
        })
        // 編集後の削除連想配列とDBのindex番号が同じである場合、「手順」を削除する
        this.state.editingProcedureRecipe.editingProcedureDeleteArr.forEach(element => {
          // 削除する「手順」コレクションパス
          const deleteRecipeProcedureData = editingRecipeData
          .collection('procedure').doc(element.recipe_procedure_id);
          deleteRecipeProcedureData.get().then(snapshot => {
            if (snapshot.data().recipe_procedure_id === element.recipe_procedure_id) {
              deleteRecipeProcedureData.delete();
            }
            // 配列を空にする
            this.state.editingProcedureRecipe.editingProcedureDeleteArr.length = 0
          })
        })
        // 削除して変更されたindex番号をDBに反映させる
        this.state.editingRecipe.editingRecipeProcedure.forEach(element => {
          const chengeProcedureIndexId = editingRecipeData
          .collection('procedure').doc(element.recipe_procedure_id);
          chengeProcedureIndexId.get().then(snapshot => {
            if (element.recipe_procedure_id !== undefined) {
              if (snapshot.data().recipe_procedure_id === element.recipe_procedure_id) {
                chengeProcedureIndexId.update({
                  recipe_procedure_index: element.recipe_procedure_index
                })
              }
            }
          })
        })
      }
    }
  }
}