import Vue from 'vue'
import firebase from 'firebase/app';
import 'firebase/analytics'

import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBM0zS9MApHhlparw_WrO6EQFu1C4eSceo",
  authDomain: "cook-stockers-5eaa5.firebaseapp.com",
  databaseURL: "https://cook-stockers-5eaa5.firebaseio.com",
  projectId: "cook-stockers-5eaa5",
  storageBucket: "cook-stockers-5eaa5.appspot.com",
  messagingSenderId: "907122073817",
  appId: "1:907122073817:web:83e001782b3c387de71ec8",
  measurementId: "G-W6YBT7YL7E"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')