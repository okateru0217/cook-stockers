<template>
  <div class="details-recipe-external-site__container">
    <div class="details-recipe-external-site__wrap">
      <div class="details-recipe-external-site__item">
        <div class="details-recipe-external-site__ttl">
          <h3>外部レシピサイトURL</h3>
        </div><!-- details-recipe-external-site__ttl -->
        <div class="details-recipe-external-site__input-url">
          <p>{{ $store.state.detailsRecipe.recipeUrl }}</p>
        </div><!-- details-recipe-external-site__input-url -->
        <div class="details-recipe-external-site__move-site">
          <button>レシピサイトへ</button>
        </div><!-- details-recipe-external-site__move-site -->
      </div><!-- details-recipe-external-site__item -->
    </div><!-- details-recipe-external-site__wrap -->
  </div><!-- details-recipe-external-site__container -->
</template>

<style lang="scss" scoped>
// 共通スタイル
* {
  font-family: 'Raleway', sans-serif;
}

.details-recipe-external-site__wrap {
  background-color: #FFF;
}

.details-recipe-external-site__ttl {

  h3 {
    padding: 30px 0 0 20px;
    font-weight: normal;
  }
}

.details-recipe-external-site__input-url {
  width: 90%;
  margin: 0 auto;
  padding: 20px 0;

  p {
    border: none;
    border-bottom: 1.5px solid #C1C1C1;
  }
}

.details-recipe-external-site__move-site {
  text-align: center;
  padding-bottom: 30px;

  button {
    cursor: pointer;
    outline: none;
    text-decoration: none;
    border-radius: 50px;
    font-weight: bold;
    color: #fff;
    background-color: #FCBB0A;
    border: 1px solid #FCBB0A;
    padding: 15px 30px;
    font-size: 15px;
  }

  button:hover {
    padding: 16px 31px;
    font-size: 16px;
  }
}

// sp用
@media screen and (max-width: 767px) {
  .details-recipe-external-site__input-url {

    p {
      width: 50vw;
    }
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .details-recipe-external-site__input-url {

    p {
      width: 50vw;
    }
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .details-recipe-external-site__ttl {

    h3 {
      margin: 0 0 20px 0;
    }
  }

  .details-recipe-external-site__input-url {

    p {
      width: 12.5vw;
    }
  }
}
</style>