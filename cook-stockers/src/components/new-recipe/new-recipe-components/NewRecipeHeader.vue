<template>
  <div class="new-recipe-header__container">
    <div class="new-recipe-header__wrap">
      <div class="new-recipe-header__back-btn">
        <p><font-awesome-icon icon="chevron-left" /></p>
      </div><!-- new-recipe-header__back-btn -->
      <div class="new-recipe-header__ttl">
        <h2>新しいレシピ</h2>
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

  p {
    margin: 0;
    font-size: 30px;
  }
}

// pc用
@media screen and (min-width: 1024px) {
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