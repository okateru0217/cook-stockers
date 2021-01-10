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
    displayDetailsRecipe(_state, displayRecipe) {
      // レシピ詳細に表示させるためのデータ
      this.state.detailsRecipe.recipeName = displayRecipe.recipe_name;
      this.state.detailsRecipe.recipeImg = displayRecipe.recipe_img;
      this.state.detailsRecipe.recipeMemo = displayRecipe.recipe_memo;
      this.state.detailsRecipe.recipeUrl = displayRecipe.recipe_Url;
      // 「材料」「量」「手順」「タグ」を表示させるために、レシピidを取得
      this.state.detailsRecipe.recipeId = displayRecipe.recipe_id;
      // 大元のコレクションパス
      const detailsRecipeData = firebase.firestore()
      .collection('users-information').doc(this.state.signin.signInData.uid)
      .collection('recipe').doc(this.state.detailsRecipe.recipeId)
      // 「材料」「量」が格納されたコレクションパス
      const detailsRecipeMaterial = detailsRecipeData.collection('material');
      // 「材料」「量」を配列に格納
      detailsRecipeMaterial.get().then(items => {
        // 一度配列を空にする
        this.state.detailsRecipe.recipeMaterialArr.length = 0;
        items.forEach(docs => {
          this.state.detailsRecipe.recipeMaterialArr.push(docs.data());
        })
      })
      // 「手順」が格納されたコレクションパス
      const detailsRecipePrcedure = detailsRecipeData.collection('procedure');
      // 「手順」を配列に格納
      detailsRecipePrcedure.get().then(procedure => {
        // 一度配列を空にする
        this.state.detailsRecipe.recipeProcedureArr.length = 0;
        procedure.forEach(docs => {
          this.state.detailsRecipe.recipeProcedureArr.push(docs.data());
        })
      })
      // 「タグ」が格納されたコレクションパス
      const detailsRecipeTag = detailsRecipeData.collection('tag');
      // 「タグ」を配列に格納
      detailsRecipeTag.get().then(tags => {
        // 一度配列を空にする
        this.state.detailsRecipe.recipeTagArr.length = 0;
        tags.forEach(docs => {
          this.state.detailsRecipe.recipeTagArr.push(docs.data());
        })
      })
    }
  }
}