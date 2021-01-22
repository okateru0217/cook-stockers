<template>
  <div class="my-recipe__container">
    <SideMenu></SideMenu>
    <div class="my-recipe__wrap">
      <div class="my-recipe__header">
        <ShoppingMemoHeader></ShoppingMemoHeader>
      </div><!-- my-recipe__header -->
      <div class="my-recipe__list">
        <ShoppingMemoList></ShoppingMemoList>
      </div>
      <div class="my-recipe__favorite-list">
        <MyRecipeFavoriteList></MyRecipeFavoriteList>
      </div>
      <div class="my-recipe__router-new-recipe-btn">
        <ShoppingMemoAddRecipeBtn></ShoppingMemoAddRecipeBtn>
      </div><!-- my-recipe__router-new-recipe-btn -->
    </div><!-- my-recipe__wrap -->
    <div class="my-recipe__footer">
      <Footer></Footer>
    </div><!-- my-recipe__footer -->
  </div><!-- my-recipe__container -->
</template>

<script>
import SideMenu from '../../components/menu/SideMenu'
import Footer from '../../components/menu/FooterMenu'
import ShoppingMemoHeader from './shopping-memo-components/ShoppingMemoHeader'
import ShoppingMemoList from './shopping-memo-components/ShoppingMemoList'
import MyRecipeFavoriteList from '../recipe/my-recipe-components/MyRecipeFavoriteList'
import ShoppingMemoAddRecipeBtn from './shopping-memo-components/ShoppingMemoAddRecipeBtn'

export default {
  components: {
    SideMenu,
    Footer,
    ShoppingMemoHeader,
    ShoppingMemoList,
    MyRecipeFavoriteList,
    ShoppingMemoAddRecipeBtn
  },
  created() {
    this.$store.dispatch('createdMemoList');
    this.$store.dispatch('createdRecipeList');
  }
}
</script>

<style lang="scss" scoped>
// pc用
@media screen and (min-width: 1024px) {
  .my-recipe__wrap {
    position: relative;
    margin-left: 25%;
  }

  .my-recipe__list {
    width: 100%;
    overflow: scroll;
  }

  .my-recipe__favorite-list {
    position: absolute;
    top: 0;
    right: 0;
    width: 35%;
    height: 100vh;
    overflow: scroll;
  }
}
</style>