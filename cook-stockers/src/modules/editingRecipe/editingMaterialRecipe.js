import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/storage";
import 'firebase/firebase-firestore'

export default {
  actions: {
     // 「編集する(DB登録)」ボタン押下時の処理
    recipeRecord() {
      if (this.state.recordRecipe.switcherAddEditBtn === false) {
        // 大元のコレクションパス
        const editingRecipeData = firebase.firestore()
        .collection('users-information').doc(this.state.signin.signInData.uid)
        .collection('recipe').doc(this.state.detailsRecipe.recipeId);
        // 編集した「材料」「量」をDBに反映
        this.state.editingRecipe.editingEditArr.forEach(element => {
          // 「材料」「量」のコレクションパス
          const editingRecipeMaterialData = editingRecipeData
          .collection('material').doc(element.recipe_material_id);
          editingRecipeMaterialData.get().then(snapshot => {
            // 編集後の連想配列とDBのindex番号が同じである場合、「材料」「量」を更新する
            if (snapshot.data().recipe_material_id === element.recipe_material_id) {
              editingRecipeMaterialData.update({
                recipe_material: element.recipe_material,
                recipe_quantity: element.recipe_quantity
              })
            }
            // 配列を空にする
            this.state.editingRecipe.editingEditArr.length = 0;
          })
        })
        // 編集後、新たに「材料」「量」が追加されていた場合、DBにそれを追加する
        this.state.editingRecipe.editingAddArr.forEach(element => {
          const addRecipeMaterialData = editingRecipeData
          .collection('material').doc();
          // DBに追加する
          addRecipeMaterialData.set({
            recipe_material_id: addRecipeMaterialData.id,
            recipe_material_index: element.recipe_material_index,
            recipe_material: element.recipe_material,
            recipe_quantity: element.recipe_quantity,
          })
          // 配列を空にする
          this.state.editingRecipe.editingAddArr.length = 0;
        })
        // 編集後の削除連想配列とDBのindex番号が同じである場合、「材料」「量」を削除する
        this.state.editingRecipe.editingDeleteArr.forEach(element => {
          // 削除する「材料」「量」コレクションパス
          const deleteRecipeMaterialData = editingRecipeData
          .collection('material').doc(element.recipe_material_id);
          deleteRecipeMaterialData.get().then(snapshot => {
            if (snapshot.data().recipe_material_id === element.recipe_material_id) {
              deleteRecipeMaterialData.delete();
            }
            // 配列を空にする
            this.state.editingRecipe.editingDeleteArr.length = 0;
          })
        })
        // 削除して変更されたindex番号をDBに反映させる
        this.state.editingRecipe.editingRecipeMaterial.forEach(element => {
          const chengeMaterialIndexID = editingRecipeData
          .collection('material').doc(element.recipe_material_id);
          chengeMaterialIndexID.get().then(snapshot => {
            if (element.recipe_material_id !== undefined) {
              if (snapshot.data().recipe_material_id === element.recipe_material_id) {
                chengeMaterialIndexID.update({
                  recipe_material_index: element.recipe_material_index
                })
              }
            }
          })
        })
      }
    }
  }
}