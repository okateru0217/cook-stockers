<template>
  <div class="details-recipe-name__container">
    <div class="details-recipe-name__wrap">
      <div class="details-recipe-name__item">
        <div class="details-recipe-name__img"
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
            class="details-recipe-name__attach-img">
          </label>
        </div><!-- details-recipe-name__img -->
        <div class="details-recipe-name__img-none" 
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
            class="details-recipe-name__attach-img">
          </label>
        </div><!-- details-recipe-name__img-none -->
        <div class="details-recipe-name__recipe-name">
          <input 
          type="text" 
          placeholder="レシピ名"
          v-model="$store.state.recordRecipe.recipeData.recipeName">
        </div><!-- details-recipe-name__recipe-name -->
      </div><!-- details-recipe-name__item -->
    </div><!-- details-recipe-name__wrap -->
  </div><!-- details-recipe-name__container -->
</template>

<script>
export default {
  data() {
    return {
      images: '$store.state.recordRecipe.recipeData.recipeImg',
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

.details-recipe-name__wrap {
  background-color: #FFF;
}

.details-recipe-name__item {
  display: flex;
  align-items: center;
}

.details-recipe-name__img {
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

.details-recipe-name__img-none {

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

.details-recipe-name__label {
  display: flex;
}

.details-recipe-name__recipe-name {

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
  .details-recipe-name__container {
    padding-top: 66px;
  }

  .details-recipe-name__wrap {
    padding: 20px 0;
  }

  .details-recipe-name__img {
    margin-left: 4vw;

    img {
      width: 90px;
      height: 80px;
    }
  }

  .details-recipe-name__img-none {
    margin-left: 4vw;
    
    img {
      width: 90px;
      height: 80px;
    }
  }

  .details-recipe-name__recipe-name {
    margin-left: 5vw;

    input {
      width: 60vw;
    }
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .details-recipe-name__container {
    padding-top: 66px;
  }

  .details-recipe-name__wrap {
    padding: 20px 0;
  }

  .details-recipe-name__img {
    margin-left: 4vw;

    img {
      width: 110px;
      height: 100px;
    }
  }

  .details-recipe-name__img-none {
    margin-left: 4vw;

    img {
      width: 110px;
      height: 100px;
    }
  }

  .details-recipe-name__recipe-name {
    margin-left: 5vw;

    input {
      width: 70vw;
    }
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .details-recipe-name__container {
    padding-top: 44px;
  }

  .details-recipe-name__wrap {
    padding: 30px 0;
  }

  .details-recipe-name__img {
    margin-left: 2vw;

    img {
      width: 110px;
      height: 100px;
    }
  }

  .details-recipe-name__img-none {
    margin-left: 2vw;

    img {
      width: 110px;
      height: 100px;
    }
  }

  .details-recipe-name__recipe-name {
    margin-left: 3vw;

    input {
      width: 25vw;
  }
    }
}
</style>