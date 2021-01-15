import router from '../../router'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore'

export default {
  state: {
    // サインアップに必要なデータを格納
    signUpData: {},
    signUpErr: {}
  },
  // サインアップ時のinput入力データをstateへ格納
  mutations: {
    setSignUpData(state, inputSignUpData) {
      state.signUpData = {...state.signUpData, ...inputSignUpData}
    },
    setSignUpErr(state, signUpErr) {
      state.signUpErr = {...state.signUpErr, ...signUpErr}
    }
  },
  actions: {
    // サインアップ処理
    signUp() {
      const userName = this.state.signup.signUpData.name;
      firebase.auth().createUserWithEmailAndPassword(this.state.signup.signUpData.email, this.state.signup.signUpData.password)
      .then(success => {
        console.log(success);
        const uid = success.user.uid;
        console.log(this.state.signup.signUpData.uid);
        this.state.signup.signUpData.uid = uid;
        // サインアップ成功時、ユーザー名をAuthenticationへ追加
        success.user.updateProfile({
          displayName: userName
        })
        .then(() => {
          console.log(userName);
          firebase.firestore().collection('users-information').doc(uid).set({
            name: userName
          })
          router.push('/myrecipe');
        })
      })
      .catch(error => {
        console.log(error);
        console.log(this.state.signup.signUpErr.blankErr)
        this.state.signup.signUpErr.blankErr = '';
      })
    }
  }
}