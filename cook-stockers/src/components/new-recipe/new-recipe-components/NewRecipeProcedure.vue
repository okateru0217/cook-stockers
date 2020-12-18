<template>
  <div class="new-recipe-procedure__container">
    <div class="new-recipe-procedure__wrap">
      <div class="new-recipe-procedure__item">
        <div class="new-recipe-procedure__ttl">
          <h3>手順</h3>
        </div><!-- new-recipe-procedure__ttl -->
        <div class="new-recipe-procedure__table">
          <table>
            <tr>
              <td><input type="text" placeholder="手順"></td>
            </tr>
          </table>
        </div><!-- new-recipe-procedure__table -->
        <div class="new-recipe-procedure__add-btn">
          <button>＋ 手順を追加</button>
        </div><!-- new-recipe-procedure__add-btn -->
      </div><!-- new-recipe-procedure__item -->
    </div><!-- new-recipe-procedure__wrap -->
  </div><!-- new-recipe-procedure__container -->
</template>

<style lang="scss" scoped>
// 共通スタイル
* {
  font-family: 'Raleway', sans-serif;
}

.new-recipe-procedure__wrap {
  background-color: #FFF;
}

.new-recipe-procedure__ttl {

  h3 {
    padding-top: 30px;
    font-weight: normal;
  }
}

.new-recipe-procedure__table {

  input {
    outline: none;
    margin-bottom: 10px;
    padding-bottom: 5px;
    border: none;
    border-bottom: 1px solid #C1C1C1;
  }
}

.new-recipe-procedure__add-btn {
  text-align: center;
  padding: 30px 0;

  button {
    cursor: pointer;
    outline: none;
    padding: 5px 10px;
    border: none;
    border-radius: 50px;
    color: #FCBB0A;
    border: 1px solid #FCBB0A;
    background-color: #FFF;
    transition: 0.3s;
  }

  button:hover {
    color: #FFF;
    border: 1px solid #FCBB0A;
    background-color:#FCBB0A;
  }
}

// sp用
@media screen and (max-width: 767px) {
  .new-recipe-procedure__ttl {

    h3 {
      padding-left: 20px;
    }
  }

  .new-recipe-procedure__table {

    input {
      width: 75vw;
      margin-left: 8vw;
    }
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .new-recipe-procedure__ttl {

    h3 {
      padding-left: 20px;
    }
  }

  .new-recipe-procedure__table {

    input {
      width: 75vw;
      margin-left: 8vw;
    }
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .new-recipe-procedure__ttl {

    h3 {
      margin-top: 0;
      padding-top: 30px;
      padding-left: 30px;
    }
  }

  .new-recipe-procedure__table {

    input {
      width: 39vw;
      margin-left: 3.6vw;
    }
  }
}
</style>