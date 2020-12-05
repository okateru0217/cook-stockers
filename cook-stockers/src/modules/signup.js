import router from '../router'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore'

export default {
  state: {
    // サインアップに必要なデータを格納
    signUpData: {}
  },
  // サインアップ時のinput入力データをstateへ格納
  mutations: {
    setSignUpData(state, inputSignUpData) {
      state.signUpData = {...state.signUpData, ...inputSignUpData}
    }
  },
  actions: {
    // サインアップ処理
    signUp() {
      // 新規登録フォームに空白が存在した場合、アラートを出す
      if (this.state.signup.signUpData.name === undefined || this.state.signup.signUpData.email === undefined || this.state.signup.signUpData.password === undefined) {
        alert('空欄の項目が存在します');
        return
      // 新規登録フォームに空白が存在した場合、アラートを出す
      } else if (this.state.signup.signUpData.name === '' || this.state.signup.signUpData.email === '' || this.state.signup.signUpData.password === '') {
        alert('空欄の項目が存在します');
        return
      // メールアドレスの書式が有効で無い場合、アラートを出す
      } else if (this.state.signup.signUpData.email.match(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/) === null) {
        alert('メールアドレスが有効でありません');
        return
      // パスワードが用件に達していない場合、アラートを出す
      } else if (this.state.signup.signUpData.password.match(/^(?=.*[A-Z])[a-zA-Z0-9.?/-]{8,}$/) === null) {
        alert('パスワードは大文字含む8文字以上(記号不可)で設定してください');
        return
      }
      const userName = this.state.signup.signUpData.name;
      firebase.auth().createUserWithEmailAndPassword(this.state.signup.signUpData.email, this.state.signup.signUpData.password)
      .then(success => {
        // サインアップ成功時、ユーザー名をAuthenticationへ追加
        success.user.updateProfile({
          displayName: userName
        })
        .then(() => {
          router.push('/myrecipe');
        })
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
}