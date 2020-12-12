<template>
  <div class="new-recipe-tag__container">
    <div class="new-recipe-tag__wrap">
      <div class="new-recipe-tag__item">
        <div class="new-recipe-tag__ttl">
          <h3>タグ追加</h3>
        </div><!-- new-recipe-tag__ttl -->
        <div class="new-recipe-tag__table">
          <table>
            <tbody>
              <tr>
                <td><p>豚肉</p></td>
                <td><p>ピーマン</p></td>
              </tr>
            </tbody>
          </table>
        </div><!-- new-recipe-tag__table -->
        <div class="new-recipe-tag__add-tag">
          <input type="text" placeholder="タグを追加">
          <button>＋ 追加</button>
        </div><!-- new-recipe-tag__add-tag -->
      </div><!-- new-recipe-tag__item -->
    </div><!-- new-recipe-tag__wrap -->
  </div><!-- new-recipe-tag__container -->
</template>

<style lang="scss" scoped>
// 共通スタイル
* {
  font-family: 'Raleway', sans-serif;
}

.new-recipe-tag__wrap {
  background-color: #FFF;
}

.new-recipe-tag__ttl {

  h3 {
    padding: 30px 0 0 20px;
    font-weight: normal;
  }
}

.new-recipe-tag__table {
  width: 90%;
  margin: 0 auto;
  padding-bottom: 5px;
  border-bottom: 1px solid #C1C1C1;

  p {
    margin: 0;
    padding: 5px 10px;
    border: 1px solid #FCBB0A;
    color: #FCBB0A;
  }
}

.new-recipe-tag__add-tag {
  width: 90%;
  margin: 0 auto;
  padding-top: 30px;

  input {
    outline: none;
    border: none;
    border-bottom: 1.5px solid #FCBB0A;
  }

  button {
    cursor: pointer;
    outline: none;
    padding: 5px 15px;
    border: none;
    border-radius: 50px;
    color: #FCBB0A;
    border: 1px solid #FCBB0A;
    background-color: #FFF;
  }

  button:hover {
    color: #FFF;
    border: 1px solid #FCBB0A;
    background-color:#FCBB0A;
  }
}

// sp用
@media screen and (max-width: 767px) {
  .new-recipe-tag__add-tag {
    padding-bottom: 30px;

    input {
      width: 45vw;
      margin-right: 15vw;
    }
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .new-recipe-tag__add-tag {
    padding-bottom: 30px;

    input {
      width: 45vw;
      margin-right: 15vw;
    }
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .new-recipe-tag__wrap {
    padding-bottom: 40px;
  }

  .new-recipe-tag__ttl {

    h3 {
      margin: 0 0 50px 0;
    }
  }

  .new-recipe-tag__add-tag { 

    input {
      width: 12.5vw;
      margin-right: 1vw;
    }
  }
}
</style>