<template>
  <div class="details-recipe-procedure__container">
    <div class="details-recipe-procedure__wrap">
      <div class="details-recipe-procedure__item">
        <div class="details-recipe-procedure__ttl">
          <h3>手順</h3>
        </div><!-- details-recipe-procedure__ttl -->
        <div class="details-recipe-procedure__table">
          <table>
            <tr v-for="procedures in this.$store.state.detailsRecipe.recipeProcedureArr"
            :key="procedures.id">
              <td class="details-recipe-procedure__index"><i>{{ procedures.recipe_procedure_index + 1 }}</i></td>
              <td class="details-recipe-procedure__procedure"><p>{{ procedures.recipe_procedure }}</p></td>
            </tr>
          </table>
        </div><!-- details-recipe-procedure__table -->
      </div><!-- details-recipe-procedure__item -->
    </div><!-- details-recipe-procedure__wrap -->
  </div><!-- details-recipe-procedure__container -->
</template>

<style lang="scss" scoped>
// 共通スタイル
* {
  font-family: 'Raleway', sans-serif;
}

.details-recipe-procedure__wrap {
  background-color: #FFF;
}

.details-recipe-procedure__ttl {

  h3 {
    padding-top: 30px;
    font-weight: normal;
  }
}

.details-recipe-procedure__table {
  width: 90%;
  margin: 0 auto;
  padding-bottom: 30px;

  table {
    width: 100%;
  }

  button {
    margin: 0;
  }

  button:hover {
    opacity: 0.7;
  }

  .details-recipe-procedure__index {
    width: 1em;
    padding-bottom: 12px;
  }

  .details-recipe-procedure__delete-btn {
    color: #FFF;
    background-color: #FF7F50;
    border: 1px solid #FF7F50;
  }

  p {
    margin: 0 0 10px 0;
    padding-bottom: 5px;
    border-bottom: 1px solid #C1C1C1;
  }
}

// sp用
@media screen and (max-width: 767px) {
  .details-recipe-procedure__ttl {

    h3 {
      padding-left: 20px;
    }
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .details-recipe-procedure__ttl {

    h3 {
      padding-left: 20px;
    }
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .details-recipe-procedure__ttl {

    h3 {
      margin-top: 0;
      padding-top: 30px;
      padding-left: 30px;
    }
  }
}
</style>