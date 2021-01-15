<template>
  <div class="new-recipe-header__container">
    <div class="new-recipe-header__wrap">
      <div class="new-recipe-header__ttl">
        <h2>マイレシピ</h2>
      </div><!-- new-recipe-header__ttl -->
    </div><!-- new-recipe-header__wrap -->
  </div><!-- new-recipe-header__container -->
</template>

<style lang="scss" scoped>
// 共通スタイル
* {
  font-family: 'Raleway', sans-serif;
}

.new-recipe-header__wrap {
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-weight: normal;
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .new-recipe-header__ttl {

    h2 {
      font-size: 16px;
    }
  }
}
</style>