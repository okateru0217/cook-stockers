<template>
  <div class="new-recipe-external-site__container">
    <div class="new-recipe-external-site__wrap">
      <div class="new-recipe-external-site__item">
        <div class="new-recipe-external-site__ttl">
          <h3>外部レシピサイトURL</h3>
        </div><!-- new-recipe-external-site__ttl -->
        <div class="new-recipe-external-site__input-url">
          <input type="text" placeholder="URLを追加">
        </div><!-- new-recipe-external-site__input-url -->
      </div><!-- new-recipe-external-site__item -->
    </div><!-- new-recipe-external-site__wrap -->
  </div><!-- new-recipe-external-site__container -->
</template>

<style lang="scss" scoped>
// 共通スタイル
* {
  font-family: 'Raleway', sans-serif;
}

.new-recipe-external-site__wrap {
  background-color: #FFF;
}

.new-recipe-external-site__ttl {

  h3 {
    padding: 30px 0 0 20px;
    font-weight: normal;
  }
}

.new-recipe-external-site__input-url {
  width: 90%;
  margin: 0 auto;
  padding: 30px 0;

  input {
    outline: none;
    border: none;
    border-bottom: 1.5px solid #C1C1C1;
  }
}

// sp用
@media screen and (max-width: 767px) {
  .new-recipe-external-site__input-url {

    input {
      width: 50vw;
    }
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .new-recipe-external-site__input-url {

    input {
      width: 50vw;
    }
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .new-recipe-external-site__ttl {

    h3 {
      margin: 0 0 20px 0;
    }
  }

  .new-recipe-external-site__input-url {

    input {
      width: 12.5vw;
    }
  }
}
</style>