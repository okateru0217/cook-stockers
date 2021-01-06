<template>
  <div class="details-recipe-container">
    <SideMenu></SideMenu>
    <div class="details-recipe__wrap">
      <div class="details-recipe__header">
        <DetailsRecipeHeader></DetailsRecipeHeader>
      </div><!-- details-recipe__header -->
      <div class="details-recipe__item">
        <div class="details-recipe__main-item">
          <div class="details-recipe__name">
            <!-- <DetailsRecipeName></DetailsRecipeName> -->
          </div><!-- details-recipe__name -->
        </div><!-- details-recipe__main-item -->
      </div><!-- details-recipe__item -->
    </div><!-- details-recipe__wrap -->
  </div><!-- details-recipe-container -->
</template>

<script>
import SideMenu from '../menu/SideMenu'
import DetailsRecipeHeader from './details-recipe-components/DetailsRecipeHeader'
// import DetailsRecipeName from './details-recipe-components/DetailsRecipeName'

export default {
  components: {
    SideMenu,
    DetailsRecipeHeader,
    // DetailsRecipeName,
  }
}
</script>

<style lang="scss" scoped>
// 共通スタイル
.details-recipe__wrap {
  background-color: #EDEDED;
}

// pc用
@media screen and (min-width: 1024px) {
  .details-recipe__wrap {
    height: 100vh;
  }

  .details-recipe__header {
    width: 50%;
    margin-left: 25%;
  }

  .details-recipe__item {
    display: flex;
  }

  .details-recipe__main-item {
    width: 50%;
    margin-left: 25%;
  }

  .details-recipe__sub-item {
    position: fixed;
    right: 0;
    width: 25%;
    height: 100vh;
    background-color: #FFF;
  }

  .details-recipe__record-btn {
    width: 50%;
    margin-left: 25%;
  }
}
</style>