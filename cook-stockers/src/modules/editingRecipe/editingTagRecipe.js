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