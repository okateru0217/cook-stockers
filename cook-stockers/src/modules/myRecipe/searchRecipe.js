export default {
  state: {
    // 検索文言
    searchValue: '',
    // 検索(フィルター)後の配列
    searchResultArr: []
  },
  actions: {
    searchRecipe() {
      // 検索欄が空の場合、全てのレシピを返す
      if (this.state.searchRecipe.searchValue === '') {
        this.state.searchRecipe.searchResultArr = this.state.recordRecipe.recipeArr;
        console.log(this.state.searchRecipe.searchResultArr);
      }
      // 検索欄に文言が入っていた場合、フィルターをかける
      if (this.state.searchRecipe.searchValue !== '') {
        for (let i = 0; i < this.state.recordRecipe.recipeArr.length; i++) {
          // レシピ名で検索し、一部分でも一致していたら、trueを返す
          const searchPartialMatch = this.state.recordRecipe.recipeArr[i].recipe_name.indexOf(this.state.searchRecipe.searchValue) > -1;
          // 検索した文言とレシピ名とが一部でも一致していたら、フィルターをかける
          if (searchPartialMatch === true) {
            let filterPartialMatchArr = [];
            filterPartialMatchArr.push(this.state.recordRecipe.recipeArr[i]);
            this.state.searchRecipe.searchResultArr = filterPartialMatchArr;
            console.log(this.state.searchRecipe.searchResultArr);
          }
        }
      }
    }
  }
}