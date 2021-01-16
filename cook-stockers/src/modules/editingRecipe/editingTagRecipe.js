import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/storage";
import 'firebase/firebase-firestore'

export default {
  state: {
    // タグ追加用配列
    editingTagAddArr: [],
    // タグ編集用配列
    editingTagEditArr: [],
    // タグ削除用配列
    editingTagDeleteArr: []
  },
  actions: {
     // 「編集する(DB登録)」ボタン押下時の処理
    recipeRecord() {
      if (this.state.recordRecipe.switcherAddEditBtn === false) {
        // 大元のコレクションパス
        const editingRecipeData = firebase.firestore()
        .collection('users-information').doc(this.state.signin.signInData.uid)
        .collection('recipe').doc(this.state.detailsRecipe.recipeId);
        // 編集した「タグ」をDBに反映
        this.state.editingRecipe.editingRecipeTag.forEach(element => {
          // 「タグ」のコレクションパス
          const editingRecipeTagData = editingRecipeData
          .collection('tag').doc(element.recipe_tag_id);
          editingRecipeTagData.get().then(snapshot => {
            // 編集後の連想配列とDBのindex番号が同じである場合、「タグ」を更新する
            if (element.recipe_tag_id !== undefined) {
              if (snapshot.data().recipe_tag_id === element.recipe_tag_id) {
                editingRecipeTagData.update({
                  recipe_tag: element.recipe_tag
                })
              }
            }
          })
        })
        // 編集後、新たに「タグ」が追加されていた場合、DBにそれを追加する
        this.state.editingTagRecipe.editingTagAddArr.forEach(element => {
          const addRecipeTagData = editingRecipeData
          .collection('tag').doc();
          // DBに追加する
          addRecipeTagData.set({
            recipe_tag_id: addRecipeTagData.id,
            recipe_tag_index: element.recipe_tag_index,
            recipe_tag: element.recipe_tag
          })
          // 配列を空にする
          this.state.editingTagRecipe.editingTagAddArr.length = 0;
        })
        // 編集後の削除連想配列とDBのindex番号が同じである場合、「タグ」を削除する
        this.state.editingTagRecipe.editingTagDeleteArr.forEach(element => {
          // 削除する「タグ」コレクションパス
          const deleteRecipeTagData = editingRecipeData
          .collection('tag').doc(element.recipe_tag_id);
          deleteRecipeTagData.get().then(snapshot => {
            if (snapshot.data().recipe_tag_id === element.recipe_tag_id) {
              deleteRecipeTagData.delete();
            }
            // 配列を空にする
            this.state.editingTagRecipe.editingTagDeleteArr.length = 0;
          })
        })
        // 削除して変更されたindex番号をDBに反映させる
        this.state.editingRecipe.editingRecipeTag.forEach(element => {
          const chengeTagIndexId = editingRecipeData
          .collection('tag').doc(element.recipe_tag_id);
          chengeTagIndexId.get().then(snapshot => {
            if (element.recipe_tag_id !== undefined) {
              if (snapshot.data().recipe_tag_id === element.recipe_tag_id) {
                chengeTagIndexId.update({
                  recipe_tag_index: element.recipe_tag_index
                })
              }
            }
          })
        })
      }
    }
  }
}