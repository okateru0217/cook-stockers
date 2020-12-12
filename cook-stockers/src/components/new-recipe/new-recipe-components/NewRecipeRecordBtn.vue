<template>
  <div class="new-recipe-record-btn__container">
    <div class="new-recipe-record-btn__wrap">
      <button>登録する</button>
    </div><!-- new-recipe-record-btn__wrap -->
  </div><!-- new-recipe-record-btn__container -->
</template>

<style lang="scss" scoped>
// 共通スタイル
* {
  font-family: 'Raleway', sans-serif;
}

.new-recipe-record-btn__wrap {
  text-align: center;

  button {
    cursor: pointer;
    outline: none;
    text-decoration: none;
    border-radius: 50px;
    font-weight: bold;
    color: #fff;
    background-color: #FCBB0A;
    border: 1px solid #FCBB0A;
    padding: 20px 70px;
    font-size: 20px;
  }

  button:hover {
    padding: 23px 73px;
  }
}

// sp用
@media screen and (max-width: 767px) {
  .new-recipe-record-btn__wrap {
    padding: 70px 0;
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .new-recipe-record-btn__wrap {
    padding: 70px 0;
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .new-recipe-record-btn__wrap {
    padding-top: 70px;
  }
}
</style>