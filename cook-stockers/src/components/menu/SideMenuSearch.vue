<template>
  <div class="search__container">
    <div class="search__wrap">
      <input 
      type="text"
      placeholder="レシピを検索"
      v-model="$store.state.searchRecipe.searchValue">
      <p @click="searchRecipe"><font-awesome-icon icon="search" /></p>
    </div><!-- search__wrap -->
  </div><!-- search__container -->
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
.search__wrap {
  display: flex;
  padding: 50px 15px 25px 30px;

  input {
    width: 260px;
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
  .side-menu__container {
    display: none;
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .side-menu__container {
    display: none;
  }
}
</style>