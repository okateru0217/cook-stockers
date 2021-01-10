<template>
  <div class="details-recipe-editing-btn__container">
    <div class="details-recipe-editing-btn__wrap">
      <button @click="editingRecipe">レシピを編集</button>
    </div><!-- details-recipe-editing-btn__wrap -->
  </div><!-- details-recipe-editing-btn__container -->
</template>

<script>
export default {
  methods: {
    editingRecipe() {
      this.$store.dispatch('editingRecipe');
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

  button {
    cursor: pointer;
    outline: none;
    text-decoration: none;
    border-radius: 50px;
    font-weight: bold;
    color: #fff;
    background-color: #FCBB0A;
    border: 1px solid #FCBB0A;
    padding: 20px 50px;
    font-size: 20px;
  }

  button:hover {
    padding: 23px 73px;
  }
}

// sp用
@media screen and (max-width: 767px) {
  .details-recipe-editing-btn__wrap {
    padding: 70px 0;
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .details-recipe-editing-btn__wrap {
    padding: 70px 0;
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .details-recipe-editing-btn__wrap {
    padding: 70px 0;
  }
}
</style>