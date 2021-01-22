import firebase from 'firebase/app';
import "firebase/storage";
import 'firebase/firebase-firestore'

export default {
  state: {
    deleteDbMemoArr: []
  },
  actions: {
    deleteMemo(_state, memos) {
      // 表示用配列から削除する
      this.state.addShoppingMemo.displayMemoArr.splice(memos.memo_index, 1);
      // index番号の整合性を保つ
      for (let i = memos.memo_index; i < this.state.addShoppingMemo.displayMemoArr.length; i++) {
        this.state.addShoppingMemo.displayMemoArr[i].memo_index = i;
      }
      // 大元のコレクションパス
      const deleteMemoCollection = firebase.firestore()
      .collection('users-information').doc(this.state.signin.signInData.uid)
      .collection('memo');
      // 削除した要素をDB削除更新用の配列に追加する
      this.state.deleteShoppingMemo.deleteDbMemoArr.push({
        memo_id: memos.memo_id,
        memo_index: memos.memo_index,
        memo: memos.memo
      });
      // 削除した要素をDBからも削除する
      const deleteMemoDoc = deleteMemoCollection.doc(this.state.deleteShoppingMemo.deleteDbMemoArr[0].memo_id);
      deleteMemoDoc.delete();
      // DB削除更新用の配列を空にする
      this.state.deleteShoppingMemo.deleteDbMemoArr.length = 0;
      // 削除して変更されたindex番号をDBに反映させる
      this.state.addShoppingMemo.displayMemoArr.forEach(displayMemo => {
        const sortMemoIndex = deleteMemoCollection.doc(displayMemo.memo_id);
        sortMemoIndex.update({
          memo_index: displayMemo.memo_index
        })
      })
    },
    // メモ欄を一括削除する
    allDeleteMemo() {
      // DBからメモを一括削除する
      this.state.addShoppingMemo.displayMemoArr.forEach(displayMemo => {
        // 一括削除用コレクションパス
        const allDeleteMemo = firebase.firestore()
        .collection('users-information').doc(this.state.signin.signInData.uid)
        .collection('memo').doc(displayMemo.memo_id);
        // DBメモ一括削除実行
        allDeleteMemo.delete();
      })
      // 表示用配列を空にする
      this.state.addShoppingMemo.displayMemoArr.splice(0);
      // メモDB追加用配列を空にする
      this.state.addShoppingMemo.addDbMemoArr.length = 0;
    }
  }
}