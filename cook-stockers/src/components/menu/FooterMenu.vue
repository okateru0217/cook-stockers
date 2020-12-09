<template>
  <div class="footer__container">
    <div class="footer__wrap">
      <div class="footer__link">
        <p class="footer__icon"><router-link to="/myrecipe"><font-awesome-icon icon="utensils" /></router-link></p>
        <p><router-link to="/myrecipe">マイレシピ</router-link></p>
      </div><!-- footer__link -->
      <div class="footer__link">
        <p class="footer__icon"><router-link to="/shoppingmemo"><font-awesome-icon icon="cart-plus" /></router-link></p>
        <p><router-link to="/shoppingmemo">買い物リスト</router-link></p>
      </div><!-- footer__link -->
    </div><!-- footer__wrap -->
  </div><!-- footer__container -->
</template>

<style lang="scss" scoped>
// 共通
.footer__container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #EDEDED;
}

.footer__wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0 auto;
}

.footer__link {
  text-align: center;

  .footer__icon {
    margin-bottom: 8px;
    font-size: 22px;
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #000;
  }
}

// sp用
@media screen and (max-width: 767px) {
  .footer__wrap {
    max-width: 460px;
    width: 80%;
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .footer__wrap {
    max-width: 480px;
    width: 60%;
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .footer__container {
    display: none;
  }
}
</style>