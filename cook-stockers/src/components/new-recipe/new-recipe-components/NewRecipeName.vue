<template>
  <div class="new-recipe-name__container">
    <div class="new-recipe-name__wrap">
      <div class="new-recipe-name__item">
        <div class="new-recipe-name__img">
          <p>画像</p>
        </div><!-- new-recipe-name__img -->
        <div class="new-recipe-name__recipe-name">
          <input type="text" placeholder="レシピ名">
        </div><!-- new-recipe-name__recipe-name -->
      </div><!-- new-recipe-name__item -->
    </div><!-- new-recipe-name__wrap -->
  </div><!-- new-recipe-name__container -->
</template>

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
  margin-left: 4vw;

  p {
    border: 1px solid #000;
  }
}

.new-recipe-name__recipe-name {
  margin-left: 5vw;

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
  .new-recipe-name__img {

    p {
      padding: 30px;
    }
  }

  .new-recipe-name__recipe-name {

    input {
      width: 60vw;
    }
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .new-recipe-name__img {

    p {
      padding: 30px;
    }
  }

  .new-recipe-name__recipe-name {

    input {
      width: 70vw;
    }
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .new-recipe-name__wrap {
    padding-bottom: 30px;
  }

  .new-recipe-name__img {

    p {
      padding: 25px;
    }
  }

  .new-recipe-name__recipe-name {

    input {
      width: 25vw;
    }
  }
}
</style>