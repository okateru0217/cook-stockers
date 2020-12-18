<template>
  <div class="new-recipe-memo__container">
    <div class="new-recipe-memo__wrap">
      <div class="new-recipe-memo__item">
        <div class="new-recipe-memo__ttl">
          <h3>メモ追加</h3>
        </div><!-- new-recipe-memo__ttl -->
        <div class="new-recipe-memo__text-area">
          <textarea name="memo" cols="30" rows="10" placeholder="メモを追加"></textarea>
        </div><!-- new-recipe-memo__text-area -->
      </div><!-- new-recipe-memo__item -->
    </div><!-- new-recipe-memo__wrap -->
  </div><!-- new-recipe-memo__container -->
</template>

<style lang="scss" scoped>
// 共通スタイル
* {
  font-family: 'Raleway', sans-serif;
}

.new-recipe-memo__wrap {
  background-color: #FFF;
}

.new-recipe-memo__ttl {

  h3 {
    outline: none;
    padding-top: 30px;
    font-weight: normal;
  }
}

.new-recipe-memo__text-area {
  text-align: center;
  padding-bottom: 30px;
  
  textarea {
    outline: none;
    border: 1px solid #C1C1C1;
    border-radius: 5px;
    padding-top: 10px;
  }

  textarea::placeholder {
    padding: 1px 0 0 10px;
  }
}

// sp用
@media screen and (max-width: 767px) {
  .new-recipe-memo__ttl {

    h3 {
      padding-left: 20px;
    }
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .new-recipe-memo__ttl {

    h3 {
      padding-left: 20px;
    }
  }

  .new-recipe-memo__text-area {
  
    textarea {
      width: 36vw;
      height: 23.5vw;
    }
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .new-recipe-memo__wrap {
    padding-bottom: 10px;
  }

  .new-recipe-memo__ttl {

    h3 {
      margin: 0 0 50px 0;
      padding-left: 20px;
    }
  }
}
</style>