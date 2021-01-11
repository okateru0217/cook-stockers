import router from '../router'
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
    // 材料と分量を格納する配列
    materialArr: [],
    // 手順を格納する配列
    procedureArr: [],
    // タグを格納する配列
    tagArr: [],
    // myrecipeテーブルにレシピを表示させるための配列
    recipeArr: [],
    // MyRecipeFavoriteListにお気に入り登録レシピを表示させるための配列
    favoriteRecipeArr: '',
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
        // マイレシピへ画面遷移する
        router.push('/myrecipe');
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
        // 「材料」「量」が格納された配列を取り出す
        this.state.recordRecipe.materialArr.forEach(items => {
          // 「材料」「量」を格納するためのコレクションパス
          const recordMaterialQuantity = firebase.firestore()
          .collection('users-information').doc(this.state.signin.signInData.uid)
          .collection('recipe').doc(recordRecipeId.id)
          .collection('material').doc();
          // 「材料」「量」入力値をcloud firestoreへ登録
          recordMaterialQuantity.set({
            recipe_material_id: recordRecipeId.id,
            recipe_material_index: items.id,
            recipe_material: items.material,
            recipe_quantity: items.quantity,
          })
        })
        // 「手順」が格納された配列を取り出す
        this.state.recordRecipe.procedureArr.forEach(items => {
          // 「手順」を格納するためのコレクションパス
          const recordProcedure = firebase.firestore()
          .collection('users-information').doc(this.state.signin.signInData.uid)
          .collection('recipe').doc(recordRecipeId.id)
          .collection('procedure').doc();
          // 「手順」入力値をcloud firestoreへ登録
          recordProcedure.set({
            recipe_procedure_id: recordRecipeId.id,
            recipe_procedure_index: items.id, 
            recipe_procedure: items.procedure
          })
        })
        // 「タグ」が格納された配列を取り出す
        this.state.recordRecipe.tagArr.forEach(items => {
          // 「タグ」を格納するためのコレクションパス
          const recordTag = firebase.firestore()
          .collection('users-information').doc(this.state.signin.signInData.uid)
          .collection('recipe').doc(recordRecipeId.id)
          .collection('tag').doc();
          // 「タグ」入力値をcloud firestoreへ登録
          recordTag.set({
            recipe_tag_id: recordRecipeId.id,
            recipe_tag_index: items.id,
            recipe_tag: items.tag
          })
          // myrecipeに表示させるためにcloud firestoreの情報を格納
          .then(() => {
            const recipeDataArr = firebase.firestore().
            collection('users-information').doc(this.state.signin.signInData.uid)
            .collection('recipe');
            recipeDataArr.get().then(snapshot => {
              this.state.recordRecipe.recipeArr.length = 0;
              snapshot.forEach(docs => {
                this.state.recordRecipe.recipeArr.push(docs.data());
              })
            })
          })
        })
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
            snapshot.forEach(docs => {
              this.state.recordRecipe.recipeArr.push(docs.data());
            })
          })
          // お気に入り欄にレシピを表示させる
          .then(() => {
            const filterFavoriteGuestRecipe = this.state.recordRecipe.recipeArr.filter(item => item.recipe_favorite_icon === '★');
            this.state.recordRecipe.favoriteRecipeArr = filterFavoriteGuestRecipe;
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
          })
          // お気に入り欄にレシピを表示させる
          .then(() => {
            const filterFavoriteRecipe = this.state.recordRecipe.recipeArr.filter(item => item.recipe_favorite_icon === '★');
            this.state.recordRecipe.favoriteRecipeArr = filterFavoriteRecipe;
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
          console.log(this.state.signin.signInData.uid);
          // メールアドレスログイン時の処理
        } else {
          this.state.signin.signInData.uid = user.uid;
          console.log(this.state.signin.signInData.uid);
        }
      })
    }
  }
}