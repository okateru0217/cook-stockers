import Vue from 'vue';
import Vuex from 'vuex';

import signin from './modules/Authentication/signin'
import signup from './modules/Authentication/signup'
import signout from './modules/Authentication/signout'
// レシピをDBへ登録する用
import recordRecipe from './modules/recordRecipe/recordRecipe'
import recordMaterialRecipe from './modules/recordRecipe/recordMaterialRecipe'
import recordProcedureRecipe from './modules/recordRecipe/recordProcedureRecipe'
import recordTagRecipe from './modules/recordRecipe/recordTagRecipe'
// レシピ詳細を見る用
import detailsRecipe from './modules/detailsRecipe/detailsRecipe'
import detailsMaterialRecipe from './modules/detailsRecipe/detailsMaterialRecipe'
import detailsProcedureRecipe from './modules/detailsRecipe/detailsProcedureRecipe'
import detailsTagRecipe from './modules/detailsRecipe/detailsTagRecipe'
// 編集したレシピをDBへ反映させる用
import editingRecipe from './modules/editingRecipe/editingRecipe'
import editingMaterialRecipe from './modules/editingRecipe/editingMaterialRecipe'
import editingProcedureRecipe from './modules/editingRecipe/editingProcedureRecipe'
import editingTagRecipe from './modules/editingRecipe/editingTagRecipe'
// レシピ詳細画面から、レシピを丸々削除する用のボタン
import detailsDeleteRecipeBtn from './modules/detailsRecipe/detailsDeleteRecipeBtn'
// レシピ検索用
import searchRecipe from './modules/myRecipe/searchRecipe'
// レシピメモ用
import addShoppingMemo from './modules/shoppingMemo/addShoppingMemo'
import deleteShoppingMemo from './modules/shoppingMemo/deleteShoppingMemo'
import reloadShoppingMemo from './modules/shoppingMemo/reloadShoppingMemo'


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    signin,
    signup,
    signout,
    // レシピをDBへ登録する用
    recordRecipe,
    recordMaterialRecipe,
    recordProcedureRecipe,
    recordTagRecipe,
    // レシピ詳細を見る用
    detailsRecipe,
    detailsMaterialRecipe,
    detailsProcedureRecipe,
    detailsTagRecipe,
    // 編集したレシピをDBへ反映させる用
    editingRecipe,
    editingMaterialRecipe,
    editingProcedureRecipe,
    editingTagRecipe,
    // レシピ詳細画面から、レシピを丸々削除する用のボタン
    detailsDeleteRecipeBtn,
    // レシピ検索用
    searchRecipe,
    // レシピ検索用
    addShoppingMemo,
    deleteShoppingMemo,
    reloadShoppingMemo
  }
})