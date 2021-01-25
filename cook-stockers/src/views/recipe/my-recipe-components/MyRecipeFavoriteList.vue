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
            <tr v-for="displayFavoriteRecipe in $store.state.searchRecipe.searchResultFavoriteArr"
            :key="displayFavoriteRecipe.id">
              <td><img :src="displayFavoriteRecipe.recipe_img"></td>
              <td class="my-recipe-favorite-list__td"><p class="my-recipe-favorite-list__recipe-name">{{ displayFavoriteRecipe.recipe_name }}</p></td>
              <td class="my-recipe-favorite-list__td"><p class="my-recipe-favorite-list__memo">{{ displayFavoriteRecipe.recipe_memo }}</p></td>
              <td class="my-recipe-favorite-list__recipe-details-btn"><a @click="RouterDetailsRecipe(displayFavoriteRecipe)">レシピ詳細 ＞</a></td>
            </tr>
          </tbody>
        </table>        
      </div><!-- my-recipe-favorite-list__table -->
    </div><!-- my-recipe-favorite-list__wrap -->
  </div><!-- my-recipe-favorite-list__container -->
</template>

<script>
import router from '../../../router';
export default {
  methods: {
    // レシピの詳細へ画面遷移
    RouterDetailsRecipe(displayFavoriteRecipe) {
      router.push('/detailsrecipe');
      this.$store.dispatch('displayDetailsRecipe', displayFavoriteRecipe);
    }
  }
}
</script>

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
  width: 26%;
  height: 34px;
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

  .my-recipe-favorite-list__recipe-details-btn {
  position: absolute;
  right: 0;
  bottom: 10px;

  a {
    cursor: pointer;
    display: inline-block;
    font-size: 0.7em;
    padding: 5px;
    color:  #000;
    text-decoration: none;
    border: 1px solid #000;
  }

  a:hover {
    color: #FFF;
  }

  a::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    z-index: -1;
    background: #000;
    transform-origin: left top;
    transform: scale(0, 1);
    transition: transform .4s;
  }

  a:hover::before {
    transform-origin: left top;
    transform: scale(1, 1);
  }
}

  .my-recipe-favorite-list__recipe-name {
    font-weight: bold;
    width: 18vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .my-recipe-favorite-list__memo {
    width: 11vw;
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