<template>
  <div class="details-recipe-editing-btn__container">
    <div class="details-recipe-editing-btn__wrap">
      <a @click="detailsDeleteRecipe">レシピを削除する</a>
    </div><!-- details-recipe-editing-btn__wrap -->
  </div><!-- details-recipe-editing-btn__container -->
</template>

<script>
export default {
  methods: {
    detailsDeleteRecipe() {
      this.$store.dispatch('detailsDeleteRecipe');
    }
  }
}
</script>

<style lang="scss" scoped>
// 共通スタイル
* {
  font-family: 'Raleway', sans-serif;
}

.details-recipe-editing-btn__wrap {
  text-align: center;
  background-color: #EDEDED;

  a {
    cursor: pointer;
    outline: none;
    text-decoration: none;
    font-weight: bold;
    color: #FF0000;
  }

  a:hover {
    opacity: 0.6;
  }
}

// sp用
@media screen and (max-width: 767px) {
  .details-recipe-editing-btn__wrap {
    padding: 50px 0 100px 0;
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .details-recipe-editing-btn__wrap {
    padding: 50px 0 100px 0;
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .details-recipe-editing-btn__wrap {
    padding: 20px 0 70px 0;
  }
}
</style>