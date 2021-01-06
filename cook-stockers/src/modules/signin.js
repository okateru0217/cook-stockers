import router from '../router'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore'
// import { config } from 'vue/types/umd';

export default {
  state: {
    // サインインに必要なデータを格納
    signInData: {},
    // 入力欄に誤りがあった場合のエラー表示まとめ
    signInErr: {},
    typingErr: ''
  },
  // サインイン時のinput入力データをstateへ格納
  mutations: {
    setSignInData(state, inputSignInData) {
      state.signInData = {...state.signInData, ...inputSignInData}
    },
    setSignInErr(state, errSignInData) {
      state.signInErr = {...state.signInErr, ...errSignInData}
    }
  },
  actions: {
    // サインイン処理
    signIn() {
      firebase.auth().signInWithEmailAndPassword(this.state.signin.signInData.email, this.state.signin.signInData.password)
      .then(success => {
        console.log(success);
        this.state.signin.signInData.uid = success.user.uid;
        // サインインに成功すると、レシピ一覧へ画面遷移
        router.push('/myrecipe');
      })
      .catch(error => {
        console.log(error);
        this.state.signin.signInErr.blankErr = '';
        this.state.signin.signInErr.activeErrEmail = false;
        this.state.signin.signInErr.activeErrPassword = false;
        // メールアドレスまたはパスワードが間違っていた場合、画面にエラーを表示させる
        this.state.signin.typingErr = 'メールアドレスまたはパスワードが間違っています';
      })
    },
    // ゲストサインイン処理
    signInGuest() {
      // レシピ一覧へ画面遷移
      router.push('/myrecipe');
      this.state.signin.signInData.uid = 'guest';
    }
  }
}