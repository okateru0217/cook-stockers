<template>
  <div class="details-recipe-name__container">
    <div class="details-recipe-name__wrap">
      <div class="details-recipe-name__item">
        <div class="details-recipe-name__img">
          <img
          :src="$store.state.detailsRecipe.recipeImg"
          alt="">
        </div><!-- details-recipe-name__img -->
        <div class="details-recipe-name__recipe-name">
          <p>{{ $store.state.detailsRecipe.recipeName }}</p>
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
}

.details-recipe-name__img-none {

  img {
    border: 1px solid #dcdcdc;
  }

  input {
    display: none;
  }
}

.details-recipe-name__recipe-name {

  p {
    outline: none;
    border: none;
    padding-bottom: 8px;
    border-bottom: 1px solid #C1C1C1;
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

    p {
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

    p {
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

    p {
      width: 25vw;
  }
}
}
</style>