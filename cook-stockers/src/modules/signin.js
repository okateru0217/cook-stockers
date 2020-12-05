import router from '../router'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore'

export default {
  state: {
    // サインインに必要なデータを格納
    signInData: {},
  },
  // サインイン時のinput入力データをstateへ格納
  mutations: {
    setSignInData(state, inputSignInData) {
      state.signInData = {...state.signInData, ...inputSignInData}
    }
  },
  actions: {
    // サインイン処理
    signIn() {
      // ログインフォームに空白が存在した場合、アラートを出す
      if (this.state.signin.signInData.email === undefined || this.state.signin.signInData.password === undefined) {
        alert('空欄の項目が存在します');
        return
      // ログインフォームに空白が存在した場合、アラートを出す
      } else if (this.state.signin.signInData.email === '' || this.state.signin.signInData.password === '') {
        alert('空欄の項目が存在します');
        return
      }
      firebase.auth().signInWithEmailAndPassword(this.state.signin.signInData.email, this.state.signin.signInData.password)
      .then(success => {
        console.log(success);
        // サインインに成功すると、レシピ一覧へ画面遷移
        router.push('/myrecipe');
      })
      .catch(error => {
        console.log(error);
        // サインインに失敗すると、アラートを出力
        alert('メールアドレスまたはパスワードが間違っています');
      })
    }
  }
}