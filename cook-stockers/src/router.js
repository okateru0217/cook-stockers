import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/first-view/Home'
import SignIn from './views/first-view/SignIn'
import SignUp from './views/first-view/SignUp'
import MyRecipe from './views/recipe/MyRecipe'
import NewRecipe from './views/new-recipe/NewRecipe'
import DetailsRecipe from './views/details-recipe/DetailsRecipe'
import ShoppingMemo from './views/shopping-memo/ShoppingMemo'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: Home}, 
    {path: '/signin', component: SignIn}, 
    {path: '/signup', component: SignUp},
    {path: '/myrecipe', component: MyRecipe},
    {path: '/newrecipe', component: NewRecipe},
    {path: '/detailsrecipe', component: DetailsRecipe},
    {path: '/shoppingmemo', component: ShoppingMemo}
  ]
});