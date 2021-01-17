<template>
  <div class="my-recipe-search__container">
    <div class="my-recipe-search__wrap">
      <input 
      type="text"
      placeholder="レシピを検索"
      v-model="$store.state.searchRecipe.searchValue">
      <p @click="searchRecipe"><font-awesome-icon icon="search" /></p>
    </div><!-- my-recipe-search__wrap -->
  </div><!-- my-recipe-search__container -->
</template>

<script>
export default {
  methods: {
    searchRecipe() {
      this.$store.dispatch('searchRecipe');
    }
  }
}
</script>

<style lang="scss" scoped>
// 共通スタイル
* {
  font-family: 'Raleway', sans-serif;
}

.my-recipe-search__container {
  position: fixed;
  top: 8%;
  left: 50%;
  transform: translateX(-50%);
}

.my-recipe-search__wrap {
  display: flex;

  input {
    outline: none;
    height: 30px;
  }

  input::placeholder {
    padding-left: 15px;
  }

  p {
    display: flex;
    align-items: center;
    margin: 0;
    margin-left: 10px;
    font-size: 1.5em;
  }

  p:hover {
    font-size: 1.7em;
  }
}

// sp用
@media screen and (max-width: 767px) {
  .my-recipe-search__wrap {

    input {
      width: 260px;
    }
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .my-recipe-search__wrap {

    input {
      width: 370px;
    }
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .my-recipe-search__container {
    display: none;
  }
}
</style>