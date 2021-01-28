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
      if (!this.state.recordRecipe.switcherAddEditBtn) {
        // 大元のコレクションパス
        const editingTagData = firebase.firestore()
        .collection('users-information').doc(this.state.signin.signInData.uid)
        .collection('recipe').doc(this.state.detailsRecipe.recipeId)
        .collection('tag');
        // 一度更地にする
        this.state.editingRecipe.editingRecipeTag.forEach(editingRecipeTag => {
          // 一括削除用コレクションパス
          const allDeleteTagData = editingTagData.doc(editingRecipeTag.recipe_tag_id);
          // 一括削除実行
          allDeleteTagData.delete();
          // 削除した要素を参照しDBから削除する
          this.state.editingTagRecipe.editingTagDeleteArr.forEach(editingTagDeleteArr => {
            const displayDeleteTagData = editingTagData.doc(editingTagDeleteArr.recipe_tag_id);
            displayDeleteTagData.delete();
          })
          // 表示用配列をDBに追加
          const setTagData = editingTagData.doc();
          setTagData.set({
            recipe_id: this.state.detailsRecipe.recipeId,
            recipe_tag_id: setTagData.id,
            recipe_tag_index: editingRecipeTag.recipe_tag_index,
            recipe_tag: editingRecipeTag.recipe_tag
          })
        })
      }
    }
  }
}