import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/storage";
import 'firebase/firebase-firestore'

export default {
  state: {
    // メモ追加input用
    addMemoValue: '',
    // メモ表示用追加用配列
    addMemoArr: [],
    // 追加されたメモをDBに反映させる用配列
    addDbMemoArr: []
  },
  actions: {
    addMemo() {
      // 入力値を、表示用配列へ追加する
      this.state.shoppingMemo.addMemoArr.push({
        memo_index: this.state.shoppingMemo.addMemoArr.length,
        memo: this.state.shoppingMemo.addMemoValue
      });
      // DB更新用の配列へ追加する
      console.log(this.state.shoppingMemo.addMemoArr);
      console.log(this.state.shoppingMemo.addMemoArr.length);
      this.state.shoppingMemo.addDbMemoArr.push({
        memo_index: this.state.shoppingMemo.addMemoArr.length -1,
        memo: this.state.shoppingMemo.addMemoValue
      })
      console.log(this.state.shoppingMemo.addDbMemoArr);
      // 追加したメモをDBに反映させる
      this.state.shoppingMemo.addDbMemoArr.forEach(memos => {
        // メモを格納するためのコレクションパス
        const memoId = firebase.firestore()
        .collection('users-information').doc(this.state.signin.signInData.uid)
        .collection('memo').doc();
        // DBにsetする
        memoId.set({
          memo_id: memoId.id,
          memo_index: memos.memo_index,
          memo: memos.memo
        })
      })
      // DB追加用の配列を空にする
      this.state.shoppingMemo.addDbMemoArr.length = 0;
      // メモ入力欄を空にする
      this.state.shoppingMemo.addMemoValue = '';
    },
    // リロード時の処理
    createdMemoList() {
      const createdMemo = () => {
        // メモを取り出すためのコレクションパス
        const createdMemoCollection = firebase.firestore()
        .collection('users-information').doc(this.state.signin.signInData.uid)
        .collection('memo').orderBy('memo', 'desc');
        createdMemoCollection.get().then(createdMemos => {
          // 一度配列を空にする
          this.state.shoppingMemo.addMemoArr.length = 0;
          this.state.shoppingMemo.addDbMemoArr.length = 0;
          // DBのデータを、表示用配列に追加する
          createdMemos.forEach(memoDocs => {
            this.state.shoppingMemo.addMemoArr.push(memoDocs.data());
          })
        })
      }
      // リロード時、uidを再代入
      firebase.auth().onAuthStateChanged((user)=> {
        // ゲストログイン時の処理
        if (user === null) {
          this.state.signin.signInData.uid = 'guest';
          createdMemo();
        // メールアドレスログイン時の処理
        } else {
          this.state.signin.signInData.uid = user.uid;
          createdMemo();
        }
      })
    }
  }
}