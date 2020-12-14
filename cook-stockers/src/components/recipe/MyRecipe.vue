<template>
  <div class="my-recipe__container">
    <HamburgerMenu></HamburgerMenu>
    <SideMenu></SideMenu>
    <div class="my-recipe__wrap">
      <div class="my-recipe__item">
        <div class="my-recipe__header">
          <MyRecipeHeader></MyRecipeHeader>
        </div><!-- my-recipe__header -->
        <div class="my-recipe__Search">
          <MyRecipeSearch></MyRecipeSearch>
        </div><!-- my-recipe__Search -->
        <div class="my-recipe__favorite">
          <MyRecipeFavorite></MyRecipeFavorite>
        </div><!-- my-recipe__favorite -->
      </div><!-- my-recipe__item -->
      <div class="my-recipe__list">
        <MyRecipeList></MyRecipeList>
      </div>
      <div class="my-recipe__favorite-list">
        <MyRecipeFavoriteList></MyRecipeFavoriteList>
      </div>
      <div class="my-recipe__router-new-recipe-btn">
        <MyRecipeRouterNewRecipe></MyRecipeRouterNewRecipe>
      </div><!-- my-recipe__router-new-recipe-btn -->
    </div><!-- my-recipe__wrap -->
    <div class="my-recipe__footer">
      <Footer></Footer>
    </div><!-- my-recipe__footer -->
  </div><!-- my-recipe__container -->
</template>

<script>
import HamburgerMenu from '../menu/HamburgerMenu'
import SideMenu from '../menu/SideMenu'
import Footer from '../menu/FooterMenu'
import MyRecipeHeader from './my-recipe-components/MyRecipeHeader'
import MyRecipeSearch from './my-recipe-components/MyRecipeSearch'
import MyRecipeFavorite from './my-recipe-components/MyRecipeFavorite'
import MyRecipeList from './my-recipe-components/MyRecipeList'
import MyRecipeFavoriteList from './my-recipe-components/MyRecipeFavoriteList'
import MyRecipeRouterNewRecipe from './my-recipe-components/MyRecipeRouterNewRecipe'

export default {
  components: {
    HamburgerMenu,
    SideMenu,
    Footer,
    MyRecipeHeader,
    MyRecipeSearch,
    MyRecipeFavorite,
    MyRecipeList,
    MyRecipeFavoriteList,
    MyRecipeRouterNewRecipe
  }
}
</script>

<style lang="scss" scoped>
.my-recipe__item {
  background-color: #FFF;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

// sp用
@media screen and (max-width: 767px) {
  .my-recipe__item {
    width: 100%;
    height: 16%;
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .my-recipe__item {
    width: 100%;
    height: 15.3%;
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .my-recipe__wrap {
    position: relative;
    margin-left: 25%;
  }

  .my-recipe__item {
    width: 50%;
    margin-left: 25%;
    background-color: #FFF;
  }

  .my-recipe__list {
    height: 100vh;
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