<template>
  <div class="router-new-recipe-btn__container">
    <div class="router-new-recipe-btn__wrap">
      <a @click="routerNewRecipe">新しいレシピ</a>
    </div><!-- router-new-recipe-btn__wrap -->
  </div><!-- router-new-recipe-btn__container -->
</template>

<script>
import router from '../../../router'

export default {
  methods: {
    routerNewRecipe() {
      this.$store.state.recordRecipe.switcherAddEditBtn = true;
      router.push('/newrecipe');
    }
  }
}
</script>

<style lang="scss" scoped>
// 共通スタイル
* {
  font-family: 'Raleway', sans-serif;
}

.router-new-recipe-btn__container {
  position: fixed;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
}

.router-new-recipe-btn__wrap {

  a {
    text-decoration: none;
    cursor: pointer;
    border-radius: 50px;
    font-weight: bold;
    color: #fff;
    background-color: #FF6200;
    padding: 17px 45px;
    font-size: 18px;
  }

  a:hover {
    padding: 19px 47px;
    font-size: 19px;
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .router-new-recipe-btn__container {
    display: none;
  }
}
</style>