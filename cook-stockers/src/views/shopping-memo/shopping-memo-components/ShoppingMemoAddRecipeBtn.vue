<template>
  <div class="shopping-memo-add-recipe-btn__container">
    <div class="shopping-memo-add-recipe-btn__wrap">
      <p>
        レシピ材料を買い物リストから<br>
        追加することができます
      </p>
      <a>マイレシピから選ぶ</a>
    </div><!-- shopping-memo-add-recipe-btn__wrap -->
  </div><!-- shopping-memo-add-recipe-btn__container -->
</template>

<style lang="scss" scoped>
// 共通スタイル
* {
  font-family: 'Raleway', sans-serif;
}

.shopping-memo-add-recipe-btn__wrap {
  padding-bottom: 100px;

  p {
    color: #A0A0A0;
    margin: 50px 0 30px auto;
  }

  a {
    cursor: pointer;
    outline: none;
    text-decoration: none;
    border-radius: 50px;
    font-weight: bold;
    color: #fff;
    background-color: #FF6200;
    border: 1px solid #FF6200;
  }
}

// sp用
@media screen and (max-width: 767px) {
  .shopping-memo-add-recipe-btn__wrap {
    text-align: center;
    
    a {
      padding: 12px 20px;
      font-size: 16px;
    }

    a:hover {
      padding: 11px 21px;
    }
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .shopping-memo-add-recipe-btn__wrap {
    text-align: center;

    a {
      padding: 12px 30px;
      font-size: 16px;
    }

    a:hover {
      padding: 11px 31px;
    }
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .shopping-memo-add-recipe-btn__wrap {
    position: absolute;
    left: 25%;
    transform: translateX(-15%);
    text-align: center;
    
    a {
      padding: 12px 30px;
      font-size: 16px;
    }

    a:hover {
      padding: 13px 31px;
    }
  }
}
</style>