<template>
  <div class="details-recipe-memo__container">
    <div class="details-recipe-memo__wrap">
      <div class="details-recipe-memo__item">
        <div class="details-recipe-memo__ttl">
          <h3>メモ</h3>
        </div><!-- details-recipe-memo__ttl -->
        <div class="details-recipe-memo__text-area">
          <p>{{ $store.state.detailsRecipe.recipeMemo }}</p>
        </div><!-- details-recipe-memo__text-area -->
      </div><!-- details-recipe-memo__item -->
    </div><!-- details-recipe-memo__wrap -->
  </div><!-- details-recipe-memo__container -->
</template>

<style lang="scss" scoped>
// 共通スタイル
* {
  font-family: 'Raleway', sans-serif;
}

.details-recipe-memo__wrap {
  background-color: #FFF;
}

.details-recipe-memo__ttl {

  h3 {
    outline: none;
    padding-top: 30px;
    font-weight: normal;
  }
}

.details-recipe-memo__text-area {
  text-align: center;
  padding-bottom: 30px;

  p {
    word-wrap: break-word;
    margin: 0 auto;
    padding-top: 10px;
    text-align: left;
    border: 1px solid #C1C1C1;
    border-radius: 5px;
  }
}

// sp用
@media screen and (max-width: 767px) {
  .details-recipe-memo__ttl {

    h3 {
      padding-left: 20px;
    }
  }

  .details-recipe-memo__text-area {

    p {
      width: 250px;
      height: 180px;
    }
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .details-recipe-memo__ttl {

    h3 {
      padding-left: 20px;
    }
  }

  .details-recipe-memo__text-area {
  
    p {
      width: 36vw;
      height: 23.5vw;
    }
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .details-recipe-memo__wrap {
    padding-bottom: 10px;
  }

  .details-recipe-memo__ttl {

    h3 {
      margin: 0 0 50px 0;
      padding-left: 20px;
    }
  }

  .details-recipe-memo__text-area {

    p {
      width: 250px;
      height: 180px;
    }
  }
}
</style>