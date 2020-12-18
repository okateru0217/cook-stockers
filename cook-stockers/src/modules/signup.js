import router from '../router'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore'

export default {
  state: {
    // サインアップに必要なデータを格納
    signUpData: {},
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
        this.state.signup.signInErr.blankErr = '';
      })
    }
  }
}