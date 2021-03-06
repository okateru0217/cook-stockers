import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/storage";
import 'firebase/firebase-firestore'

export default {
  state: {
    // メモ追加input用
    addMemoValue: '',
    // メモ表示用追加用配列
    displayMemoArr: [],
    // 追加されたメモをDBに反映させる用配列
    addDbMemoArr: [],
    // レシピ詳細から持ってきた材料を、一旦格納する配列
    materialAddShoppingArr: []
  },
  actions: {
    addMemo() {
      // 入力欄が空欄の場合、アラートを出す
      if (this.state.addShoppingMemo.addMemoValue === '') {
        alert('入力欄にメモを入力して下さい');
        return
      }
      // 入力値を、表示用配列へ追加する
      this.state.addShoppingMemo.displayMemoArr.push({
        memo_index: this.state.addShoppingMemo.displayMemoArr.length,
        memo: this.state.addShoppingMemo.addMemoValue
      });
      // DB更新用の配列へ追加する
      this.state.addShoppingMemo.addDbMemoArr.push({
        memo_index: this.state.addShoppingMemo.displayMemoArr.length -1,
        memo: this.state.addShoppingMemo.addMemoValue
      })
      // メモを格納するための大元のコレクションパス
      const addMemoCollection = firebase.firestore()
      .collection('users-information').doc(this.state.signin.signInData.uid)
      .collection('memo');
      // 追加したメモをDBに反映させる
      this.state.addShoppingMemo.addDbMemoArr.forEach(memos => {
        // メモを格納するためのドック
        const addMemoDoc = addMemoCollection.doc();
        // DBにsetする
        addMemoDoc.set({
          memo_id: addMemoDoc.id,
          memo_index: memos.memo_index,
          memo: memos.memo
        })
      })
      // DB追加用の配列を空にする
      this.state.addShoppingMemo.addDbMemoArr.length = 0;
      // DBのメモ情報を、表示用配列に格納する(idを追加するため)
      addMemoCollection.orderBy('memo_index', 'asc').get().then(displayMemoAddId => {
        // 表示用配列を空にする
        this.state.addShoppingMemo.displayMemoArr.length = 0;
        displayMemoAddId.forEach(memoDocs => {
          this.state.addShoppingMemo.displayMemoArr.push(memoDocs.data());
        })
      })
      // メモ入力欄を空にする
      this.state.addShoppingMemo.addMemoValue = '';
    },
    // レシピ詳細画面から、材料を買い物メモへ追加する
    materialAddShoppingMemo() {
      // レシピ詳細画面から、材料を取ってくる
      this.state.detailsRecipe.recipeMaterialArr.forEach(recipeMaterial => {
        // 取ってきた材料を、材料表示用配列に追加する
        this.state.addShoppingMemo.materialAddShoppingArr.push({
          memo_index: this.state.addShoppingMemo.displayMemoArr.length,
          memo: recipeMaterial.recipe_material
        })
      })
    }
  }
}