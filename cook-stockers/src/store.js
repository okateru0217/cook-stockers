import Vue from 'vue';
import Vuex from 'vuex';

import signin from './modules/signin'
import signup from './modules/signup'

Vue.use(Vuex);

export default new Vuex.Store({

  modules: {
    signin,
    signup
  }
})