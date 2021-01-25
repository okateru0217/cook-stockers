<template>
  <div class="shopping-memo-header__container">
    <div class="shopping-memo-header__wrap">
      <div class="shopping-memo-header__back-btn">
        <a @click="$router.go(-1)"><font-awesome-icon icon="chevron-left" /></a>
      </div><!-- shopping-memo-header__back-btn -->
      <div class="shopping-memo-header__ttl">
        <h2 v-if="$store.state.recordRecipe.switcherAddEditBtn === true">買い物メモ</h2>
        <h2 v-else>{{ $store.state.detailsRecipe.recipeName }}</h2>
      </div><!-- shopping-memo-header__ttl -->
      <div class="shopping-memo-header__all-delete-btn">
        <ShoppingMemoAllDeleteBtn></ShoppingMemoAllDeleteBtn>
      </div><!-- shopping-memo-header__all-delete-btn -->
    </div><!-- shopping-memo-header__wrap -->
  </div><!-- shopping-memo-header__container -->
</template>

<script>
import ShoppingMemoAllDeleteBtn from './ShoppingMemoAllDeleteBtn'

export default {
  components: {
    ShoppingMemoAllDeleteBtn
  }
}
</script>

<style lang="scss" scoped>
// 共通スタイル
* {
  font-family: 'Raleway', sans-serif;
}

.shopping-memo-header__container {
  position: fixed;
  z-index: 10;
}

.shopping-memo-header__wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-weight: normal;
  }
}

.shopping-memo-header__back-btn {
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

.shopping-memo-header__all-delete-btn {
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
}

// sp用
@media screen and (max-width: 767px) {
  .shopping-memo-header__container {
    width: 100%;
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .shopping-memo-header__container {
    width: 100%;
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .shopping-memo-header__container {
    width: 49%;
  }

  .shopping-memo-header__back-btn {
    display: none;
  }

  .shopping-memo-header__ttl {

    h2 {
      font-size: 16px;
    }
  }
}
</style>