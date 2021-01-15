import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/storage";
import 'firebase/firebase-firestore'

export default {
  state: {
    // レシピ名
    recipeName: '',
    // レシピ画像
    recipeImg: '',
    // レシピメモ
    recipeMemo: '',
    // レシピURL
    recipeUrl: '',
    // レシピid
    recipeId: '',
    // レシピ材料, 量
    recipeMaterialArr: [],
    // レシピ手順
    recipeProcedureArr: [],
    // レシピタグ
    recipeTagArr: []
  },
  actions: {
    createDetailsRecipe() {
      firebase.auth().onAuthStateChanged((user)=> {
        // ゲストログイン時の処理
        if (user === null) {
          this.state.signin.signInData.uid = 'guest';
        // メールアドレスログイン時の処理
        } else {
          this.state.signin.signInData.uid = user.uid;
        }
      })
    },
    // レシピ詳細画面に表示させるための処理
    displayDetailsRecipe(_state, displayRecipe) {
      // レシピ詳細に表示させるためのデータ
      this.state.detailsRecipe.recipeName = displayRecipe.recipe_name;
      this.state.detailsRecipe.recipeImg = displayRecipe.recipe_img;
      this.state.detailsRecipe.recipeMemo = displayRecipe.recipe_memo;
      this.state.detailsRecipe.recipeUrl = displayRecipe.recipe_Url;
      // 「材料」「量」「手順」「タグ」を表示させるために、レシピidを取得
      this.state.detailsRecipe.recipeId = displayRecipe.recipe_id;
    }
  }
}