import router from '../router'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore'

export default {
  actions: {
    // サインアウト処理
    signOut() {
      firebase.auth().signOut()
      .then(() => {
        router.push('/');
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
}