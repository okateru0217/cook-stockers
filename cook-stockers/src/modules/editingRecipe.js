import router from '../router'
import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/storage";
import 'firebase/firebase-firestore'

export default {
  state: {
    // レシピ名編集用
    editingRecipeName: '',
    // レシピメモ編集用
    editingRecipeMemo: '',
    // レシピ外部サイト編集用
    editingRecipeUrl: '',
    // レシピ材料, 量編集用
    editingRecipeMaterial: '',
    // レシピ手順編集用
    editingRecipeProcedure: '',
    // レシピタグ編集用
    editingRecipeTag: '',
    // レシピ追加用配列
    editingAddArr: [],
    // レシピ編集用配列
    editingEditArr: [],
    // レシピ削除用配列
    editingDeleteArr: []
  },
  actions: {
     // 「レシピを編集(画面遷移)」ボタンを押下時の処理
    editingRecipe() {
      router.push('/newrecipe');
      this.state.recordRecipe.switcherAddEditBtn = false;
      // 画面遷移時、stateにv-model用のレシピ情報を記述
      this.state.editingRecipe.editingRecipeName = this.state.detailsRecipe.recipeName;
      this.state.editingRecipe.editingRecipeMemo = this.state.detailsRecipe.recipeMemo;
      this.state.editingRecipe.editingRecipeUrl = this.state.detailsRecipe.recipeUrl;
      this.state.editingRecipe.editingRecipeMaterial = this.state.detailsRecipe.recipeMaterialArr;
      this.state.editingRecipe.editingRecipeProcedure = this.state.detailsRecipe.recipeProcedureArr;
      this.state.editingRecipe.editingRecipeTag = this.state.detailsRecipe.recipeTagArr;
    },
    // 「編集する(DB登録)」ボタン押下時の処理
    recipeRecord() {
      if (this.state.recordRecipe.switcherAddEditBtn === false) {
        // 大元のコレクションパス
        const editingRecipeData = firebase.firestore()
        .collection('users-information').doc(this.state.signin.signInData.uid)
        .collection('recipe').doc(this.state.detailsRecipe.recipeId);
        // 編集した「レシピ名」「メモ」「Url」をDBに反映
        editingRecipeData.update({
          recipe_name: this.state.editingRecipe.editingRecipeName,
          recipe_memo: this.state.editingRecipe.editingRecipeMemo,
          recipe_Url: this.state.editingRecipe.editingRecipeUrl
        })
        // 編集した「材料」「量」をDBに反映
        this.state.editingRecipe.editingEditArr.forEach(element => {
          // 「材料」「量」のコレクションパス
          const editingRecipeMaterialData = editingRecipeData
          .collection('material').doc(element.recipe_material_id);
          editingRecipeMaterialData.get().then(snapshot => {
            // 編集後の連想配列とDBのindex番号が同じである場合、「材料」「量」を更新する
            console.log(this.state.editingRecipe.editingRecipeMaterial);
            if (snapshot.data().recipe_material_id === element.recipe_material_id) {
              editingRecipeMaterialData.update({
                recipe_material: element.recipe_material,
                recipe_quantity: element.recipe_quantity
              })
            }
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
            this.state.editingRecipe.editingDeleteArr.length = 0;
          })
        })
        // 編集した「手順」をDBに反映
        this.state.editingRecipe.editingRecipeProcedure.forEach(element => {
          // 「手順」のコレクションパス
          const editingRecipeProcedureData = editingRecipeData
          .collection('procedure').doc(element.recipe_procedure_id);
          editingRecipeProcedureData.get().then(snapshot => {
            // 編集後の連想配列とDBのindex番号が同じである場合、「手順」を更新する
            if (snapshot.data().recipe_procedure_id === element.recipe_procedure_id) {
              editingRecipeProcedureData.update({
                recipe_procedure: element.recipe_procedure
              })
            }
          })
        })
        // 編集した「タグ」をDBに反映
        this.state.editingRecipe.editingRecipeTag.forEach(element => {
          // 「タグ」のコレクションパス
          const editingRecipeTagData = editingRecipeData
          .collection('tag').doc(element.recipe_tag_id);
          editingRecipeTagData.get().then(snapshot => {
            // 編集後の連想配列とDBのindex番号が同じである場合、「タグ」を更新する
            if (snapshot.data().recipe_tag_id === element.recipe_tag_id) {
              editingRecipeTagData.update({
                recipe_tag: element.recipe_tag
              })
            }
          })
        })
      }
    }
  }
}