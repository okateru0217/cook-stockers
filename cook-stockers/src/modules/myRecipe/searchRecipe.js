export default {
  state: {
    // 検索文言
    searchValue: '',
    // 検索(フィルター)後の配列
    searchResultArr: [],
    // お気に入り画面用の検索(フィルター)配列
    searchResultFavoriteArr: []
  },
  actions: {
    searchRecipe() {
      // 検索欄が空の場合、全てのレシピを返す
      if (this.state.searchRecipe.searchValue === '') {
        // 「通常」時のフィルター
        this.state.searchRecipe.searchResultArr = this.state.recordRecipe.recipeArr;
        // 「お気に入り」時のフィルター
        this.state.searchRecipe.searchResultFavoriteArr = this.state.recordRecipe.recipeArr.filter(item => item.recipe_favorite_icon === '★');
      }
      // 検索欄に文言が入っていた場合、フィルターをかける
      if (this.state.searchRecipe.searchValue !== '') {
        // 「通常」時のフィルター
        if (this.state.recordRecipe.CengeColorBtn === true) {
          // 検索に引っかからない場合に使用する配列
          const noneSearchArr = [];
          // 検索に引っかかった要素を格納する用の配列
          let filterPartialMatchArr = [];
          for (let i = 0; i < this.state.recordRecipe.recipeArr.length; i++) {
            // レシピ名で検索し、一部分でも一致していたら、trueを返す関数
            const searchPartialMatch = (search) => {
              const searchResult = search.indexOf(this.state.searchRecipe.searchValue) > -1;
              noneSearchArr.push(searchResult)
              if (searchResult === true) {
                filterPartialMatchArr.push(this.state.recordRecipe.recipeArr[i]);
                // 同じレシピの重複表示を避ける
                const doubleFilter = new Set(filterPartialMatchArr);
                this.state.searchRecipe.searchResultArr = doubleFilter;
              }
            }
            // レシピ一覧
            const recipeArr = this.state.recordRecipe.recipeArr[i];
            searchPartialMatch(recipeArr.recipe_name);
            searchPartialMatch(recipeArr.recipe_memo);
            for (let subIndex = 0; subIndex < recipeArr.material.length; subIndex++) {
              searchPartialMatch(recipeArr.material[subIndex].recipe_material);
            }
            for (let subIndex = 0; subIndex < recipeArr.procedure.length; subIndex++) {
              searchPartialMatch(recipeArr.procedure[subIndex].recipe_procedure);
            }
            for (let subIndex = 0; subIndex < recipeArr.tag.length; subIndex++) {
              searchPartialMatch(recipeArr.tag[subIndex].recipe_tag);
            }
          }
          // 検索に引っかからない場合、レシピに表示しない
          const none = noneSearchArr.filter(item => item === true);
          if (none.length === 0) {
            this.state.searchRecipe.searchResultArr = none;
          }
        // 「お気に入り」時のフィルター
        } else {
          // 検索に引っかからない場合に使用する配列
          const noneFavoriteSearchArr = [];
          for (let i = 0; i < this.state.recordRecipe.favoriteRecipeArr.length; i++) {
            // レシピ名で検索し、一部分でも一致していたら、trueを返す
            const searchFavoritePartialMatch = this.state.recordRecipe.favoriteRecipeArr[i].recipe_name.indexOf(this.state.searchRecipe.searchValue) > -1;
            noneFavoriteSearchArr.push(searchFavoritePartialMatch);
            // 検索した文言とレシピ名とが一部でも一致していたら、フィルターをかける
            if (searchFavoritePartialMatch === true) {
              let filterFavoritePartialMatchArr = [];
              filterFavoritePartialMatchArr.push(this.state.recordRecipe.favoriteRecipeArr[i]);
              this.state.searchRecipe.searchResultFavoriteArr = filterFavoritePartialMatchArr;
            }
          }
          // 検索に引っかからない場合、レシピに表示しない
          const noneFavorite = noneFavoriteSearchArr.filter(item => item === true);
          if (noneFavorite.length === 0) {
            this.state.searchRecipe.searchResultFavoriteArr = noneFavorite;
          }
        }
      }
    }
  }
}