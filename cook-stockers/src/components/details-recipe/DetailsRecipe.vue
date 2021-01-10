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
            <DetailsRecipeName></DetailsRecipeName>
          </div><!-- details-recipe__name -->
          <div class="details-recipe__material">
            <DetailsRecipeMaterial></DetailsRecipeMaterial>
          </div><!-- details-recipe__material -->
          <div class="details-recipe__procedure">
            <DetailsRecipeProcedure></DetailsRecipeProcedure>
          </div><!-- details-recipe__procedure -->
        </div><!-- details-recipe__main-item -->
        <div class="details-recipe__sub-item">
          <div class="details-recipe__tag">
            <DetailsRecipeTag></DetailsRecipeTag>
          </div><!-- details-recipe__tag -->
          <div class="details-recipe__memo">
            <DetailsRecipeMemo></DetailsRecipeMemo>
          </div><!-- details-recipe__memo -->
          <div class="details-recipe__external-site">
            <DetailsRecipeExternalSite></DetailsRecipeExternalSite>
          </div><!-- details-recipe__external-site -->
        </div><!-- details-recipe__sub-item -->
      </div><!-- details-recipe__item -->
      <div class="details-recipe__editing-recipe-btn">
        <DetailsRecipeEditingBtn></DetailsRecipeEditingBtn>
      </div><!-- details-recipe__editing-recipe-btn -->
    </div><!-- details-recipe__wrap -->
    <div class="details-recipe__footer">
      <Footer></Footer>
    </div><!-- details-recipe__footer -->
  </div><!-- details-recipe-container -->
</template>

<script>
import SideMenu from '../menu/SideMenu'
import Footer from '../menu/FooterMenu'
import DetailsRecipeHeader from './details-recipe-components/DetailsRecipeHeader'
import DetailsRecipeName from './details-recipe-components/DetailsRecipeName'
import DetailsRecipeMaterial from './details-recipe-components/DetailsRecipeMaterial'
import DetailsRecipeProcedure from './details-recipe-components/DetailsRecipeProcedure'
import DetailsRecipeTag from './details-recipe-components/DetailsRecipeTag'
import DetailsRecipeMemo from './details-recipe-components/DetailsRecipeMemo'
import DetailsRecipeExternalSite from './details-recipe-components/DetailsRecipeExternalSite'
import DetailsRecipeEditingBtn from './details-recipe-components/DetailsRecipeEditingBtn'

export default {
  components: {
    SideMenu,
    Footer,
    DetailsRecipeHeader,
    DetailsRecipeName,
    DetailsRecipeMaterial,
    DetailsRecipeProcedure,
    DetailsRecipeTag,
    DetailsRecipeMemo,
    DetailsRecipeExternalSite,
    DetailsRecipeEditingBtn
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