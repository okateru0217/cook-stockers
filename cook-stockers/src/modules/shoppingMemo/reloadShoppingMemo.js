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
        .collection('memo');
        // メモを表示させるための関数
        const displayMemo = () => {
          // 降順に並び替えたコレクション
          const createdMemoCollectionOrder = createdMemoCollection.orderBy('memo_index', 'asc');
          createdMemoCollectionOrder.get().then(createdMemos => {
            // 一度配列を空にする
            this.state.addShoppingMemo.displayMemoArr.length = 0;
            this.state.addShoppingMemo.addDbMemoArr.length = 0;
            // DBのデータを、表示用配列に追加する
            createdMemos.forEach(memoDocs => {
              this.state.addShoppingMemo.displayMemoArr.push(memoDocs.data());
            })
          })
        }
        displayMemo();
        // 「買い物メモへ追加」ボタンから遷移時、材料を配列に追加する
        this.state.addShoppingMemo.materialAddShoppingArr.forEach(materialAdd => {
          // 表示用配列に追加
          this.state.addShoppingMemo.displayMemoArr.push({
            memo_index: this.state.addShoppingMemo.displayMemoArr.length,
            memo: materialAdd.memo
          })
          // DBへ追加する
          const addMaterialCollection = createdMemoCollection.doc();
          addMaterialCollection.set({
            memo_id: addMaterialCollection.id,
            memo_index: this.state.addShoppingMemo.displayMemoArr.length -1,
            memo: materialAdd.memo
          })
          displayMemo();
        })
        // レシピ詳細から持ってきた材料を、一旦格納する配列を空にする
        this.state.addShoppingMemo.materialAddShoppingArr.length = 0;
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