<template>
  <div class="new-recipe__container">
    <SideMenu></SideMenu>
    <div class="new-recipe__wrap">
      <div class="new-recipe__header">
        <NewRecipeHeader></NewRecipeHeader>
      </div><!-- new-recipe__header -->
      <div class="new-recipe__item">
        <div class="new-recipe__main-item">
          <div class="new-recipe__name">
            <NewRecipeName></NewRecipeName>
          </div><!-- new-recipe__name -->
          <div class="new-recipe__material">
            <NewRecipeMaterial></NewRecipeMaterial>
          </div><!-- new-recipe__material -->
          <div class="new-recipe__procedure">
            <NewRecipeProcedure></NewRecipeProcedure>
          </div><!-- new-recipe__procedure -->
        </div><!-- new-recipe__main-item -->
        <div class="new-recipe__sub-item">
          <div class="new-recipe__tag">
            <NewRecipeTag></NewRecipeTag>
          </div><!-- new-recipe__tag -->
          <div class="new-recipe__tag-memo">
            <NewRecipeMemo></NewRecipeMemo>
          </div><!-- new-recipe__tag-memo -->
          <div class="new-recipe__external-site">
            <NewRecipeExternalSite></NewRecipeExternalSite>
          </div><!-- new-recipe__external-site -->
        </div><!-- new-recipe__sub-item -->
      </div><!-- new-recipe__item -->
      <div class="new-recipe__record-btn">
        <NewRecipeRecordBtn></NewRecipeRecordBtn>
      </div><!-- new-recipe__record-btn -->
    </div><!-- new-recipe__wrap -->
    <div class="new-recipe__footer">
      <Footer></Footer>
    </div><!-- new-recipe__footer -->
  </div><!-- new-recipe__container -->
</template>

<script>
import SideMenu from '../../components/menu/SideMenu'
import Footer from '../../components/menu/FooterMenu'
import NewRecipeHeader from './new-recipe-components/NewRecipeHeader'
import NewRecipeName from './new-recipe-components/NewRecipeName'
import NewRecipeMaterial from './new-recipe-components/NewRecipeMaterial'
import NewRecipeProcedure from './new-recipe-components/NewRecipeProcedure'
import NewRecipeTag from './new-recipe-components/NewRecipeTag'
import NewRecipeMemo from './new-recipe-components/NewRecipeMemo'
import NewRecipeExternalSite from './new-recipe-components/NewRecipeExternalSite'
import NewRecipeRecordBtn from './new-recipe-components/NewRecipeRecordBtn'

export default {
  components: {
    SideMenu,
    Footer,
    NewRecipeHeader,
    NewRecipeName,
    NewRecipeMaterial,
    NewRecipeProcedure,
    NewRecipeTag,
    NewRecipeMemo,
    NewRecipeExternalSite,
    NewRecipeRecordBtn
  },
  // リロード時、状態を保持させる
  created() {
    this.$store.dispatch('created');
  }
}
</script>

<style lang="scss" scoped>
// 共通スタイル
.new-recipe__wrap {
  background-color: #EDEDED;
}

// pc用
@media screen and (min-width: 1024px) {
  .new-recipe__wrap {
    height: 100vh;
  }

  .new-recipe__header {
    width: 50%;
    margin-left: 25%;
  }

  .new-recipe__item {
    display: flex;
  }

  .new-recipe__main-item {
    width: 50%;
    margin-left: 25%;
  }

  .new-recipe__sub-item {
    position: fixed;
    right: 0;
    width: 25%;
    height: 100vh;
    background-color: #FFF;
  }

  .new-recipe__record-btn {
    width: 50%;
    margin-left: 25%;
  }
}
</style>