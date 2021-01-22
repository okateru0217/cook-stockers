import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/storage";
import 'firebase/firebase-firestore'

export default {
  actions: {
    // リロード時の処理
    createdMemoList() {
      // メモ表示を表示させる
      const createdMemo = () => {
        // メモを取り出すためのコレクションパス
        const createdMemoCollection = firebase.firestore()
        .collection('users-information').doc(this.state.signin.signInData.uid)
        .collection('memo').orderBy('memo_index', 'asc');
        createdMemoCollection.get().then(createdMemos => {
          // 一度配列を空にする
          this.state.addShoppingMemo.displayMemoArr.length = 0;
          this.state.addShoppingMemo.addDbMemoArr.length = 0;
          // DBのデータを、表示用配列に追加する
          createdMemos.forEach(memoDocs => {
            this.state.addShoppingMemo.displayMemoArr.push(memoDocs.data());
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