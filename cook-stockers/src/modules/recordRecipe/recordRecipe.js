import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/storage";
import 'firebase/firebase-firestore'

export default {
  state: {
    // v-model用連想配列
    recipeData: {
      recipeName: '',
      recipeImg: '',
      recipeMemo: '',
      recipeUrl: ''
    },
    // レシピ登録時のレシピID
    recordRecipeId: '',
    // 材料と分量を格納する配列
    materialArr: [],
    // 手順を格納する配列
    procedureArr: [],
    // タグを格納する配列
    tagArr: [],
    // myrecipeテーブルにレシピを表示させるための配列
    recipeArr: [],
    // MyRecipeFavoriteListにお気に入り登録レシピを表示させるための配列
    favoriteRecipeArr: [],
    // お気に入りアイコン
    favoriteIcon: '☆',
    // tablet表示以下のお気に入り表示判定用
    CengeColorBtn: true,
    // レシピを追加するか編集するかを切り替えるスイッチ
    switcherAddEditBtn: true
  },
  actions: {
    // 「登録する」ボタン押下時、cloud firestoreへ登録  
    recipeRecord() {
      if (this.state.recordRecipe.switcherAddEditBtn === true) {
        // 「ID」「料理名」を格納するためのコレクションパス
        const recordRecipeId = firebase.firestore()
        .collection('users-information').doc(this.state.signin.signInData.uid)
        .collection('recipe').doc();
        // 「ID」「料理名」入力値をcloud firestoreへ登録
        recordRecipeId.set({
          recipe_id: recordRecipeId.id,
          recipe_name: this.state.recordRecipe.recipeData.recipeName,
          recipe_img: this.state.recordRecipe.recipeData.recipeImg,
          recipe_memo: this.state.recordRecipe.recipeData.recipeMemo,
          recipe_Url: this.state.recordRecipe.recipeData.recipeUrl,
          recipe_favorite_icon: '☆'
        })
        // DB登録後、入力値を空にする
        this.state.recordRecipe.recipeData.recipeName = '';
        this.state.recordRecipe.recipeData.recipeImg = '';
        this.state.recordRecipe.recipeData.recipeMemo = '';
        this.state.recordRecipe.recipeData.recipeUrl = '';
        // 「材料」「量」「手順」「タグ」を登録するために、コレクションのIDを変数に入れる
        this.state.recordRecipe.recordRecipeId = recordRecipeId.id;
      }
    },
    // レシピ画像をfirebaseのstrageにupload
    imgUpLoad(_state, payload) {
      const file = payload.target.files[0];
      const storageRef = firebase.storage().ref("images/" + file.name); 
      storageRef.put(file).then(() => {
        // uploadしたstrageの画像をdownloadして表示する
        storageRef.getDownloadURL().then(url => {
          this.state.recordRecipe.recipeData.recipeImg = url;
        })
      })
    },
    // マイレシピ画面がリロードされた時、レシピ表示を保持する
    createdRecipeList() {
      firebase.auth().onAuthStateChanged((user)=> {
        // ゲストログイン時の処理
        if (user === null) {
          this.state.signin.signInData.uid = 'guest';
          const recipeDataGuestArr = firebase.firestore()
          .collection('users-information').doc(this.state.signin.signInData.uid)
          .collection('recipe');
          recipeDataGuestArr.get().then(snapshot => {
            // 一度配列を空にする
            this.state.recordRecipe.recipeArr.length = 0;
            this.state.searchRecipe.searchResultArr.length = 0;
            snapshot.forEach(docs => {
              this.state.recordRecipe.recipeArr.push(docs.data());
            })
            this.state.searchRecipe.searchResultArr = this.state.recordRecipe.recipeArr;
          })
          // お気に入り欄にレシピを表示させる
          .then(() => {
            const filterFavoriteGuestRecipe = this.state.searchRecipe.searchResultArr.filter(item => item.recipe_favorite_icon === '★');
            // フィルター用の配列に追加
            this.state.recordRecipe.favoriteRecipeArr = filterFavoriteGuestRecipe;
            this.state.searchRecipe.searchResultFavoriteArr = filterFavoriteGuestRecipe;
          })
        // メールアドレスログイン時の処理
        } else {
          this.state.signin.signInData.uid = user.uid;
          const recipeDataArr = firebase.firestore()
          .collection('users-information').doc(this.state.signin.signInData.uid)
          .collection('recipe');
          recipeDataArr.get().then(snapshot => {
            // 一度配列を空にする
            this.state.recordRecipe.recipeArr.length = 0;
            snapshot.forEach(docs => {
              this.state.recordRecipe.recipeArr.push(docs.data());
            })
            // フィルターをかけるための配列に入れる
            this.state.searchRecipe.searchResultArr = this.state.recordRecipe.recipeArr;
          })
          // お気に入り欄にレシピを表示させる
          .then(() => {
            const filterFavoriteRecipe = this.state.recordRecipe.recipeArr.filter(item => item.recipe_favorite_icon === '★');
            // フィルター用の配列に追加
            this.state.recordRecipe.favoriteRecipeArr = filterFavoriteRecipe;
            this.state.searchRecipe.searchResultFavoriteArr = filterFavoriteRecipe;
          })
        }
      })
    },
    // お気に入りアイコンの状態を変化、それに伴いDB更新
    renewFavoriteIcon(_state, payload) {
      const recordFavoriteIcon = firebase.firestore()
      .collection('users-information').doc(this.state.signin.signInData.uid)
      .collection('recipe').doc(payload.recipe_id)
      if (payload.recipe_favorite_icon === '☆'){
        recordFavoriteIcon.update({
          recipe_favorite_icon: '☆'
        })
      } else {
        recordFavoriteIcon.update({
          recipe_favorite_icon: '★'
        })
      }
    },
    // リロード時、uidを再代入
    created() {
      firebase.auth().onAuthStateChanged((user)=> {
        // ゲストログイン時の処理
        if (user === null) {
          this.state.signin.signInData.uid = 'guest';
          // メールアドレスログイン時の処理
        } else {
          this.state.signin.signInData.uid = user.uid;
        }
      })
    }
  }
}