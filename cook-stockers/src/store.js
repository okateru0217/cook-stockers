import Vue from 'vue';
import Vuex from 'vuex';

import signin from './modules/signin'
import signup from './modules/signup'
import signout from './modules/signout'
import recordRecipe from './modules/recordRecipe'

Vue.use(Vuex);

export default new Vuex.Store({

  modules: {
    signin,
    signup,
    signout,
    recordRecipe
  }
})