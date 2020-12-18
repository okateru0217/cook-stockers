<template>
  <div class="new-recipe-material__container">
    <div class="new-recipe-material__wrap">
      <div class="new-recipe-material__item">
        <div class="new-recipe-material__ttl">
          <h3>材料</h3>
        </div><!-- new-recipe-material__ttl -->
        <div class="new-recipe-material__table">
          <table>
            <tbody>
              <tr>
                <td 
                class="new-recipe-material__material-td">
                <input 
                type="text" 
                placeholder="材料名" 
                class="new-recipe-material__material-input"></td>
                <td 
                class="new-recipe-material__quantity-td">
                <input 
                type="text" 
                placeholder="量" 
                class="new-recipe-material__quantity-input"></td>
              </tr>
            </tbody>
          </table>
        </div><!-- new-recipe-material__table -->
        <div class="new-recipe-material__add-btn">
          <button>＋ 材料を追加</button>
        </div><!-- new-recipe-material__add-btn -->
      </div><!-- new-recipe-material__item -->
    </div><!-- new-recipe-material__wrap -->
  </div><!-- new-recipe-material__container -->
</template>

<style lang="scss" scoped>
// 共通スタイル
* {
  font-family: 'Raleway', sans-serif;
}

.new-recipe-material__wrap {
  background-color: #FFF;
}

.new-recipe-material__ttl {

  h3 {
    padding-top: 30px;
    font-weight: normal;
  }
}

.new-recipe-material__table {
  display: flex;
  justify-content: space-around;

  input {
    outline: none;
    padding-bottom: 5px;
    border: none;
    border-bottom: 1px solid #C1C1C1;
  }
}

.new-recipe-material__add-btn {
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
  .new-recipe-material__ttl {

    h3 {
      padding-left: 20px;
    }
  }

  .new-recipe-material__table {

    input {
      margin-bottom: 10px;
    }

    .new-recipe-material__material-td {
      width: 60vw;
    }

    .new-recipe-material__material-input {
      width: 80%;
    }

    .new-recipe-material__quantity-td {
      width: 20vw;
    }

    .new-recipe-material__quantity-input {
      width: 70%;
    }
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .new-recipe-material__ttl {

    h3 {
      padding-left: 20px;
    }
  }

  .new-recipe-material__table {

    input {
      margin-bottom: 20px;
    }

    .new-recipe-material__material-td {
      width: 60vw;
    }

    .new-recipe-material__material-input {
      width: 80%;
    }

    .new-recipe-material__quantity-td {
      width: 20vw;
    }

    .new-recipe-material__quantity-input {
      width: 70%;
    }
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .new-recipe-material__ttl {

    h3 {
      margin-top: 0;
      padding-top: 30px;
      padding-left: 30px;
    }
  }

  .new-recipe-material__table {

    input {
      margin-bottom: 20px;
    }

    .new-recipe-material__material-td {
      width: 32vw;
    }

    .new-recipe-material__material-input {
      width: 90%;
    }

    .new-recipe-material__quantity-td {
      width: 10vw;
    }

    .new-recipe-material__quantity-input {
      width: 60%;
    }
  }
}
</style>