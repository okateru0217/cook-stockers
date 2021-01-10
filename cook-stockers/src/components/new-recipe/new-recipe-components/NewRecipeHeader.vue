<template>
  <div class="new-recipe-header__container">
    <div class="new-recipe-header__wrap">
      <div class="new-recipe-header__back-btn">
        <a @click="$router.go(-1)"><font-awesome-icon icon="chevron-left" /></a>
      </div><!-- new-recipe-header__back-btn -->
      <div class="new-recipe-header__ttl">
        <h2 v-if="$store.state.recordRecipe.switcherAddEditBtn === true">新しいレシピ</h2>
        <h2 v-else>{{ $store.state.detailsRecipe.recipeName }}</h2>
      </div><!-- new-recipe-header__ttl -->
    </div><!-- new-recipe-header__wrap -->
  </div><!-- new-recipe-header__container -->
</template>

<style lang="scss" scoped>
// 共通スタイル
* {
  font-family: 'Raleway', sans-serif;
}

.new-recipe-header__container {
  position: fixed;
  background-color: #EDEDED;
}

.new-recipe-header__wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-weight: normal;
  }
}

.new-recipe-header__back-btn {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);

  a {
    margin: 0;
    font-size: 30px;
  }

  a:hover {
    font-size: 34px;
  }
}

// sp用
@media screen and (max-width: 767px) {
  .new-recipe-header__container {
    width: 100%;
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .new-recipe-header__container {
    width: 100%;
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .new-recipe-header__container {
    width: 50%;
  }

  .new-recipe-header__back-btn {
    display: none;
  }

  .new-recipe-header__ttl {

    h2 {
      font-size: 16px;
    }
  }
}
</style>