<template>
  <div class="details-recipe-header__container">
    <div class="details-recipe-header__wrap">
      <div class="details-recipe-header__back-btn">
        <a @click="$router.go(-1)"><font-awesome-icon icon="chevron-left" /></a>
      </div><!-- details-recipe-header__back-btn -->
      <div class="details-recipe-header__ttl">
        <h2>{{ recipe_name }}</h2>
      </div><!-- details-recipe-header__ttl -->
    </div><!-- details-recipe-header__wrap -->
  </div><!-- details-recipe-header__container -->
</template>

<script>
export default {
  computed: {
    recipe_name() {
      return this.$store.state.detailsRecipe.detailsRecipeArr[0].detailsRecipe_name
    }
  },
  created() {
    this.$store.dispatch('createDetailsRecipe');
    console.log(this.$store.state.recordRecipe.recipeArr)
  }
}
</script>

<style lang="scss" scoped>
// 共通スタイル
* {
  font-family: 'Raleway', sans-serif;
}

.details-recipe-header__container {
  position: fixed;
  background-color: #EDEDED;
}

.details-recipe-header__wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-weight: normal;
  }
}

.details-recipe-header__back-btn {
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
  .details-recipe-header__container {
    width: 100%;
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .details-recipe-header__container {
    width: 100%;
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .details-recipe-header__container {
    width: 50%;
  }

  .details-recipe-header__back-btn {
    display: none;
  }

  .details-recipe-header__ttl {

    h2 {
      font-size: 16px;
    }
  }
}
</style>