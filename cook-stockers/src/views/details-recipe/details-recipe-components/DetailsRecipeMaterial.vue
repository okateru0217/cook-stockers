<template>
  <div class="details-recipe-material__container">
    <div class="details-recipe-material__wrap">
      <div class="details-recipe-material__item">
        <div class="details-recipe-material__ttl">
          <h3>材料</h3>
        </div><!-- details-recipe-material__ttl -->
        <div class="details-recipe-material__table">
          <table>
            <tbody>
              <tr v-for="items in this.$store.state.detailsRecipe.recipeMaterialArr"
              :key="items.id">
                <td 
                class="details-recipe-material__material-td">
                <p>{{ items.recipe_material }}</p></td>
                <td
                class="details-recipe-material__quantity-td">
                <p>{{ items.recipe_quantity }}</p></td>
              </tr>
            </tbody>
          </table>
        </div><!-- details-recipe-material__table -->
        <div class="details-recipe-material__add-shopping-memo-btn">
          <a @click="materialAddShoppingMemo">買い物メモへ追加</a>
        </div><!-- details-recipe-material__add-shopping-memo-btn -->
      </div><!-- details-recipe-material__item -->
    </div><!-- details-recipe-material__wrap -->
  </div><!-- details-recipe-material__container -->
</template>

<script>
import router from '../../../router';

export default {
  methods: {
    // レシピ詳細画面から、材料を買い物メモへ追加する
    materialAddShoppingMemo() {
      this.$store.dispatch('materialAddShoppingMemo');
      router.push('/shoppingmemo');
    }
  }
}
</script>

<style lang="scss" scoped>
// 共通スタイル
* {
  font-family: 'Raleway', sans-serif;
}

.details-recipe-material__wrap {
  background-color: #FFF;
}

.details-recipe-material__ttl {

  h3 {
    padding-top: 30px;
    font-weight: normal;
  }
}

.details-recipe-material__table {
  display: flex;
  justify-content: space-around;
  padding-bottom: 30px;

  table {
    width: 90%;
  }

  td {
    width: 26px;
    padding: 0;
  }

  a {
    margin: 0;
  }

  a:hover {
    opacity: 0.7;
  }

  .details-recipe-material__delete-btn {
    color: #FFF;
    background-color: #FF7F50;
    border: 1px solid #FF7F50;
  }

  p {
    margin: 0 0 10px 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid #C1C1C1;
  }
}

.details-recipe-material__add-shopping-memo-btn {
  text-align: center;
  padding-bottom: 30px;

  a {
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

  a:hover {
    padding: 16px 31px;
    font-size: 16px;
  }
}

// sp用
@media screen and (max-width: 767px) {
  .details-recipe-material__ttl {

    h3 {
      padding-left: 20px;
    }
  }

  .details-recipe-material__table {

    input {
      margin-bottom: 10px;
    }

    a {
      font-size: 0.8em;
    }

    .details-recipe-material__material-td {
      width: 60vw;
    }

    .details-recipe-material__quantity-td {
      width: 20vw;
    }
  }

  .details-recipe-material__input {
    width: 90%;
    margin: 0 auto;
    margin-top: 30px;

    input {
      margin-bottom: 10px;
    }

    .details-recipe-material__material-input {
      width: 80%;
      margin-right: 20px;
    }

    .details-recipe-material__quantity-input {
      width: 33%;
    }
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .details-recipe-material__ttl {

    h3 {
      padding-left: 20px;
    }
  }

  .details-recipe-material__table {

    input {
      margin-bottom: 20px;
    }

    .details-recipe-material__material-td {
      width: 60vw;
    }

    .details-recipe-material__quantity-td {
      width: 20vw;
    }
  }

  .details-recipe-material__input {
    width: 90%;
    margin: 0 auto;
    margin-top: 30px;

    input {
      margin-bottom: 10px;
    }

    .details-recipe-material__material-input {
      width: 80%;
      margin-right: 20px;
    }

    .details-recipe-material__quantity-input {
      width: 33%;
    }
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .details-recipe-material__ttl {

    h3 {
      margin-top: 0;
      padding-top: 30px;
      padding-left: 30px;
    }
  }

  .details-recipe-material__table {

    input {
      margin-bottom: 20px;
    }

    .details-recipe-material__material-td {
      width: 32vw;
    }

    .details-recipe-material__material-input {
      width: 90%;
    }

    .details-recipe-material__quantity-td {
      width: 10vw;
    }

    .details-recipe-material__quantity-input {
      width: 60%;
    }
  }

  .details-recipe-material__input {
    width: 90%;
    margin: 0 auto;
    margin-top: 30px;

    input {
      margin-bottom: 10px;
    }

    .details-recipe-material__material-input {
      width: 80%;
      margin-right: 20px;
    }

    .details-recipe-material__quantity-input {
      width: 33%;
    }
  }
}
</style>