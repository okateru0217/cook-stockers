<template>
  <div class="my-recipe-list__container">
    <div class="my-recipe-list__wrap">
      <div class="my-recipe-list__table">
        <table>
          <tbody v-if="$store.state.recordRecipe.CengeColorBtn === true">
            <tr v-for="displayRecipe in $store.state.searchRecipe.searchResultArr"
            :key="displayRecipe.id"
            >
              <td><img :src="displayRecipe.recipe_img"></td>
              <td class="my-recipe-list__td"><p class="my-recipe-list__recipe-name">{{ displayRecipe.recipe_name }}</p></td>
              <td class="my-recipe-list__td"><p class="my-recipe-list__memo">{{ displayRecipe.recipe_memo }}</p></td>
              <!-- <td class="my-recipe-list__td"><p class="my-recipe-list__tag">タグ</p></td> -->
              <td class="my-recipe-list__favorite-icon"><p @click="activeFavoriteIcon(displayRecipe)">{{ displayRecipe.recipe_favorite_icon }}</p></td>
              <td class="my-recipe-list__recipe-details-btn"><a @click="RouterDetailsRecipe(displayRecipe)">レシピ詳細 ＞</a></td>
            </tr>
          </tbody>
          <tbody v-if="$store.state.recordRecipe.CengeColorBtn === false">
            <tr v-for="displayFavoriteRecipe in $store.state.searchRecipe.searchResultFavoriteArr"
            :key="displayFavoriteRecipe.id">
              <td><img :src="displayFavoriteRecipe.recipe_img"></td>
              <td class="my-recipe-list__td"><p class="my-recipe-list__recipe-name">{{ displayFavoriteRecipe.recipe_name }}</p></td>
              <td class="my-recipe-list__td"><p class="my-recipe-list__memo">{{ displayFavoriteRecipe.recipe_memo }}</p></td>
              <!-- <td class="my-recipe-list__td"><p class="my-recipe-list__tag">タグ</p></td> -->
              <td class="my-recipe-list__favorite-icon"><p @click="activeFavoriteIcon(displayFavoriteRecipe)">{{ displayFavoriteRecipe.recipe_favorite_icon }}</p></td>
              <td class="my-recipe-list__recipe-details-btn"><a @click="RouterDetailsRecipe(displayFavoriteRecipe)">レシピ詳細 ＞</a></td>
            </tr>
          </tbody>
        </table>
      </div><!-- my-recipe-list__table -->
    </div><!-- my-recipe-list__wrap -->
  </div><!-- my-recipe-list__container -->
</template>

<script>
// import { filter } from 'vue/types/umd';
import router from '../../../router'
export default {
  methods: {
    // お気に入りボタン押下したリストのみ、お気に入りリストに反映される
    activeFavoriteIcon(displayRecipe) {
      if (displayRecipe.recipe_favorite_icon === '☆') {
        displayRecipe.recipe_favorite_icon = '★';
        this.$store.dispatch('renewFavoriteIcon', displayRecipe);
      } else {
        displayRecipe.recipe_favorite_icon = '☆';
        this.$store.dispatch('renewFavoriteIcon', displayRecipe);
      }
      // お気に入り登録したリストを、配列に格納
      const filterFavoriteRecipe = this.$store.state.searchRecipe.searchResultArr.filter(item => item.recipe_favorite_icon === '★');
      // フィルター用の配列に追加
      this.$store.state.searchRecipe.searchResultFavoriteArr = filterFavoriteRecipe;
    },
    // レシピの詳細へ画面遷移
    RouterDetailsRecipe(displayRecipe) {
      router.push('/detailsrecipe');
      this.$store.dispatch('displayDetailsRecipe', displayRecipe);
    }
  },
  created() {
    this.$store.dispatch('createdRecipeList');
  },
}
</script>

<style lang="scss" scoped>
// 共通スタイル
.my-recipe-list__wrap {

  p {
    margin: 0;
  }
}

.my-recipe-list__table {
  padding-top: 55px;

  tr {
    position: relative;
    display: block;
    padding: 5px 0;
    border-bottom: 1px solid #C1C1C1;
  }

  img {
    width: 70px;
    height: 70px;
  }

  .my-recipe-list__td {
    position: absolute;
    top: 0;
    left: 100px;
    display: block;
  }

  .my-recipe-list__recipe-name {
    padding-top: 5px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .my-recipe-list__memo {
    padding-top: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .my-recipe-list__tag {
    padding-top: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.my-recipe-list__favorite-icon {
  position: absolute;
  top: 5px;
  right: 0;
  cursor: pointer;
}

.my-recipe-list__recipe-details-btn {
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

// sp用
@media screen and (max-width: 767px) {
  .my-recipe-list__container {
    margin: 100px 0 70px 0;
  }

  .my-recipe-list__table {
    width: 95%;
    margin: 0 auto;

    tr {
      width: 95vw;
    }

    .my-recipe-list__recipe-name {
      max-width: 69vw;
    }

    .my-recipe-list__memo {
      max-width: 51vw;
    }

    .my-recipe-list__tag {
      max-width: 69vw;
    }
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .my-recipe-list__container {
    margin: 100px 0 70px 0;
  }

  .my-recipe-list__table {
    width: 95%;
    margin: 0 auto;

    tr {
      width: 95vw;
    }

    .my-recipe-list__recipe-name {
      max-width: 80vw;
    }

    .my-recipe-list__memo {
      max-width: 70vw;
    }

    .my-recipe-list__tag {
      max-width: 80vw;
    }
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .my-recipe-list__table {
    margin-left: 1vw;

    tr {
      width: 45vw;
    }

    .my-recipe-list__recipe-name {
      max-width: 35vw;
    }

    .my-recipe-list__memo {
      max-width: 29vw;
    }

    .my-recipe-list__tag {
      max-width: 35vw;
    }
  }
}
</style>