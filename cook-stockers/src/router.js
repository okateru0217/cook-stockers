import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/home/Home'
import SignIn from './components/home/SignIn'
import SignUp from './components/home/SignUp'
import MyRecipe from './components/recipe/MyRecipe'
import NewRecipe from './components/new-recipe/NewRecipe'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: Home}, 
    {path: '/signin', component: SignIn}, 
    {path: '/signup', component: SignUp},
    {path: '/myrecipe', component: MyRecipe},
    {path: '/newrecipe', component: NewRecipe},
  ]
});