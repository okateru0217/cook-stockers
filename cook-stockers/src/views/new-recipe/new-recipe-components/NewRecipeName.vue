<template>
  <div class="new-recipe-name__container">
    <div class="new-recipe-name__wrap">
      <div class="new-recipe-name__item">
        <!-- 画像が選択されている場合 -->
        <div class="new-recipe-name__img"
        v-if="$store.state.recordRecipe.recipeData.recipeImg !== '' ">
          <img  
          :src="$store.state.recordRecipe.recipeData.recipeImg"
          alt="">
          <label>
            画像を選択
            <input
            @change="imgUpLoad"
            type="file" 
            data-label="画像の添付"
            class="new-recipe-name__attach-img">
          </label>
        </div><!-- new-recipe-name__img -->
        <!-- レシピ編集時 -->
        <div class="editing-recipe__img"
        v-else-if="$store.state.editingRecipe.editingRecipeImg !== '' ">
          <img  
          :src="$store.state.editingRecipe.editingRecipeImg"
          alt="">
          <label>
            画像を選択
            <input
            @change="imgUpLoad"
            type="file" 
            data-label="画像の添付"
            class="new-recipe-name__attach-img">
          </label>
        </div><!-- editing-recipe__img -->
        <!-- 画像が表示されていない場合 -->
        <div class="new-recipe-name__img-none" 
        v-else>
          <img 
          src="../../../assets/img-none.png" 
          alt="">
          <label>
            画像を選択
            <input
            @change="imgUpLoad"
            type="file" 
            data-label="画像の添付"
            class="new-recipe-name__attach-img">
          </label>
        </div><!-- new-recipe-name__img-none -->
        <div class="new-recipe-name__recipe-name">
          <input 
          v-if="$store.state.recordRecipe.switcherAddEditBtn === true"
          type="text" 
          placeholder="レシピ名"
          v-model="$store.state.recordRecipe.recipeData.recipeName"
          >
          <input 
          v-else
          type="text" 
          placeholder="レシピ名"
          v-model="$store.state.editingRecipe.editingRecipeName"
          >
        </div><!-- new-recipe-name__recipe-name -->
      </div><!-- new-recipe-name__item -->
    </div><!-- new-recipe-name__wrap -->
  </div><!-- new-recipe-name__container -->
</template>

<script>
export default {
  data() {
    return {
      images: '$store.state.recordRecipe.recipeData.recipeImg'
    }
  },
  methods: {
    imgUpLoad(e) {
      this.$store.dispatch('imgUpLoad', e);
    }
  }
}
</script>

<style lang="scss" scoped>
// 共通スタイル
* {
  font-family: 'Raleway', sans-serif;
}

.new-recipe-name__wrap {
  background-color: #FFF;
}

.new-recipe-name__item {
  display: flex;
  align-items: center;
}

.new-recipe-name__img {
  input {
    display: none;
  }

  label {
    display: block;
    text-align: center;
    font-size: 0.9em;
    padding: 5px;
    border-radius: 10px;
    color: #FF7F50;
    border: 1px solid #FF7F50;
    background-color: #FFF;
    transition: 0.3s;
  }

  label:hover {
    color: #FFF;
    background-color: #FF7F50;
  }
}

.editing-recipe__img {
  input {
    display: none;
  }

  label {
    display: block;
    text-align: center;
    font-size: 0.9em;
    padding: 5px;
    border-radius: 10px;
    color: #FF7F50;
    border: 1px solid #FF7F50;
    background-color: #FFF;
    transition: 0.3s;
  }

  label:hover {
    color: #FFF;
    background-color: #FF7F50;
  }
}

.new-recipe-name__img-none {

  img {
    border: 1px solid #dcdcdc;
  }

  input {
    display: none;
  }

  label {
    display: block;
    text-align: center;
    font-size: 0.9em;
    padding: 5px;
    border-radius: 10px;
    color: #FF7F50;
    border: 1px solid #FF7F50;
    background-color: #FFF;
    transition: 0.3s;
  }

  label:hover {
    color: #FFF;
    background-color: #FF7F50;
  }
}

.new-recipe-name__label {
  display: flex;
}

.new-recipe-name__recipe-name {

  input {
    outline: none;
    border: none;
    padding-bottom: 8px;
    border-bottom: 1px solid #C1C1C1;
  }

  input::placeholder {
    padding-left: 10px;
  }
}

// sp用
@media screen and (max-width: 767px) {
  .new-recipe-name__container {
    padding-top: 66px;
  }

  .new-recipe-name__wrap {
    padding: 20px 0;
  }

  .new-recipe-name__img {
    margin-left: 4vw;

    img {
      width: 90px;
      height: 80px;
    }
  }

  .editing-recipe__img {
    margin-left: 4vw;

    img {
      width: 90px;
      height: 80px;
    }
  }

  .new-recipe-name__img-none {
    margin-left: 4vw;
    
    img {
      width: 90px;
      height: 80px;
    }
  }

  .new-recipe-name__recipe-name {
    margin-left: 5vw;

    input {
      width: 60vw;
    }
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .new-recipe-name__container {
    padding-top: 66px;
  }

  .new-recipe-name__wrap {
    padding: 20px 0;
  }

  .new-recipe-name__img {
    margin-left: 4vw;

    img {
      width: 110px;
      height: 100px;
    }
  }

  .editing-recipe__img {
    margin-left: 4vw;

    img {
      width: 110px;
      height: 100px;
    }
  }

  .new-recipe-name__img-none {
    margin-left: 4vw;

    img {
      width: 110px;
      height: 100px;
    }
  }

  .new-recipe-name__recipe-name {
    margin-left: 5vw;

    input {
      width: 70vw;
    }
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .new-recipe-name__container {
    padding-top: 44px;
  }

  .new-recipe-name__wrap {
    padding: 30px 0;
  }

  .new-recipe-name__img {
    margin-left: 2vw;

    img {
      width: 110px;
      height: 100px;
    }
  }

  .editing-recipe__img {
    margin-left: 2vw;

    img {
      width: 110px;
      height: 100px;
    }
  }

  .new-recipe-name__img-none {
    margin-left: 2vw;

    img {
      width: 110px;
      height: 100px;
    }
  }

  .new-recipe-name__recipe-name {
    margin-left: 3vw;

    input {
      width: 25vw;
  }
    }
}
</style>