<template>
  <div class="details-recipe-tag__container">
    <div class="details-recipe-tag__wrap">
      <div class="details-recipe-tag__item">
        <div class="details-recipe-tag__ttl">
          <h3>タグ</h3>
        </div><!-- details-recipe-tag__ttl -->
        <div class="details-recipe-tag__table">
          <table>
            <tbody>
              <tr
              v-for="tags in this.$store.state.detailsRecipe.recipeTagArr"
              :key="tags.id">
                <td><p>{{ tags.recipe_tag }}</p></td>
              </tr>
            </tbody>
          </table>
        </div><!-- details-recipe-tag__table -->
      </div><!-- details-recipe-tag__item -->
    </div><!-- details-recipe-tag__wrap -->
  </div><!-- details-recipe-tag__container -->
</template>

<script>
export default {
  data() {
    return {
      // タグを入力
      tagValue: '',
      // 編集時のインデックスを取得する
      editIndex: '',
      // ボタンの初期表示
      chengeOverAddTask: '＋ 追加',
      // ボタンの切り替え
      onAddBtn: true
    }
  }
}
</script>

<style lang="scss" scoped>
// 共通スタイル
* {
  font-family: 'Raleway', sans-serif;
}

.details-recipe-tag__wrap {
  background-color: #FFF;
}

.details-recipe-tag__ttl {

  h3 {
    padding: 30px 0 0 20px;
    font-weight: normal;
  }
}

.details-recipe-tag__table {
  width: 90%;
  margin: 0 auto;
  padding-bottom: 5px;
  border-bottom: 1px solid #C1C1C1;
  white-space: nowrap;
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  tbody {
    display: flex;
  }

  p {
    text-align: center;
    margin: 0;
    padding: 5px 10px;
    border: 1px solid #FCBB0A;
    color: #FCBB0A;
  }
}

.details-recipe-tag__table::-webkit-scrollbar {
  display:none;
}

// sp用
@media screen and (max-width: 767px) {
  .details-recipe-tag__item {
    padding-bottom: 30px;
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .details-recipe-tag__item {
    padding-bottom: 30px;
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .details-recipe-tag__item {
    padding-bottom: 30px;
  }

  .details-recipe-tag__ttl {

    h3 {
      margin: 0 0 50px 0;
    }
  }
}
</style>