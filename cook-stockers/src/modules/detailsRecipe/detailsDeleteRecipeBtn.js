import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/storage";
import 'firebase/firebase-firestore';

import router from '../../router';

export default {
  actions: {
    detailsDeleteRecipe() {
      const verificationDeleteRecipeConfirm = confirm('本当に削除しますか？');
      // 「OK」押下時
      if (verificationDeleteRecipeConfirm) {
        // レシピ詳細のコレクションパス
        const detailsRecipeData = firebase.firestore()
        .collection('users-information').doc(this.state.signin.signInData.uid)
        .collection('recipe').doc(this.state.detailsRecipe.recipeId);
        // レシピを削除する
        detailsRecipeData.delete();
        // 削除したレシピのサブコレクション(材料)を削除する
        const referMaterialSubCollection = detailsRecipeData
        .collection('material');
        referMaterialSubCollection.get().then(snapshot => {
          if (snapshot.docs[0] !== undefined) {
            const deleteMaterialSubCollection = referMaterialSubCollection.doc(snapshot.docs[0].id);
            deleteMaterialSubCollection.delete();
          }
        })
        // 削除したレシピのサブコレクション(手順)を削除する
        const referProcedureSubCollection = detailsRecipeData
        .collection('procedure');
        referProcedureSubCollection.get().then(snapshot => {
          if (snapshot.docs[0] !== undefined) {
            const deleteProcedureSubCollection = referProcedureSubCollection.doc(snapshot.docs[0].id);
            deleteProcedureSubCollection.delete();
          }
        })
        // 削除したレシピのサブコレクション(タグ)を削除する
        const referTagSubCollection = detailsRecipeData
        .collection('tag');
        referTagSubCollection.get().then(snapshot => {
          if (snapshot.docs[0] !== undefined) {
            const deleteTagSubCollection = referTagSubCollection.doc(snapshot.docs[0].id);
            deleteTagSubCollection.delete();
          }
        })
        alert('レシピを削除しました');
        // マイレシピに移動する
        router.push('/myrecipe');
      // 「キャンセル」押下時
      } else {
        alert('キャンセルしました');
        return
      }
    }
  }
}