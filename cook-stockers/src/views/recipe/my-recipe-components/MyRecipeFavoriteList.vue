<template>
  <div class="my-recipe-favorite-list__container">
    <div class="my-recipe-favorite-list__wrap">
      <div class="my-recipe-favorite-list__item">
        <div class="my-recipe-favorite-list__header">
          <h2>お気に入り</h2>
        </div><!-- my-recipe-favorite-list__header -->
      </div><!-- my-recipe-favorite-list__item -->
      <div class="my-recipe-favorite-list__table">
        <table>
          <tbody>
            <tr v-for="displayFavoriteRecipe in $store.state.recordRecipe.favoriteRecipeArr"
            :key="displayFavoriteRecipe.id">
              <td><img :src="displayFavoriteRecipe.recipe_img"></td>
              <td class="my-recipe-favorite-list__td"><p class="my-recipe-favorite-list__recipe-name">{{ displayFavoriteRecipe.recipe_name }}</p></td>
              <td class="my-recipe-favorite-list__td"><p class="my-recipe-favorite-list__memo">{{ displayFavoriteRecipe.recipe_memo }}</p></td>
            </tr>
          </tbody>
        </table>        
      </div><!-- my-recipe-favorite-list__table -->
    </div><!-- my-recipe-favorite-list__wrap -->
  </div><!-- my-recipe-favorite-list__container -->
</template>

<style lang="scss" scoped>
// 共通スタイル
.my-recipe-favorite-list__header {
  position: fixed;
  top: 0;
  right: 11%;
  text-align: center;

  h2 {
    font-size: 16px;
    font-weight: normal;
  }
}

.my-recipe-favorite-list__item  {
  position: fixed;
  top: 0;
  right: 0;
  width: 25%;
  height: 5.7%;
  background-color: #FFF;
  z-index: 10;
}

.my-recipe-favorite-list__table {
  padding-top: 55px;

  tr {
    position: relative;
    display: block;
    width: 24vw;
    padding: 4px 0;
    border-bottom: 1px solid #C1C1C1;
  }

  img {
    width: 55px;
    height: 55px;
  }

  p {
    margin: 0;
  }

  .my-recipe-favorite-list__td {
    position: absolute;
    top: 4px;
    left: 80px;
    display: block;
  }

  .my-recipe-favorite-list__recipe-name {
    font-weight: bold;
    width: 18vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .my-recipe-favorite-list__memo {
    width: 18vw;
    padding-top: 35px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

// sp用
@media screen and (max-width: 767px) {
  .my-recipe-favorite-list__container {
    display: none;
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .my-recipe-favorite-list__container {
    display: none;
  }
}
</style>