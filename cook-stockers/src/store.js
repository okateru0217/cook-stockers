import Vue from 'vue';
import Vuex from 'vuex';

import signin from './modules/signin'
import signup from './modules/signup'
import signout from './modules/signout'

Vue.use(Vuex);

export default new Vuex.Store({

  modules: {
    signin,
    signup,
    signout
  }
})