<template>
  <div class="signin__container">
    <div class="header">
      <Header></Header>
    </div><!-- header -->
    <div class="signin__wrap">
      <div class="signin__main-wrap">
        <h2>ログイン</h2>
        <div class="signin__mail-input">
          <label for="mail">メールアドレス</label>
          <input 
          type="text"
          placeholder="email@adress.com"
          v-model="$store.state.signin.signInData.email"
          :class="{'signin__change-color--blank':signInErr.activeErrEmail}">
        </div><!-- signin__mail-input -->
        <div class="signin__pw-input">
          <label for="password">パスワード</label>
          <input 
          type="password"
          placeholder="Password"
          v-model="$store.state.signin.signInData.password"
          :class="{'signin__change-color--blank':signInErr.activeErrPassword}">
        </div><!-- signin__pw-input -->
        <div class="signin__err-message">
          <p>{{ signInErr.blankErr }}</p>
          <p>{{ typingErr }}</p>
        </div><!-- signin__err-message -->
        <div class="signin__btn">
          <button @click="signIn">ログイン</button>
        </div><!-- signin__btn -->
      </div><!-- signin__main-wrap -->
    </div><!-- signin__wrap -->
  </div><!-- signin__container -->
</template>

<script>
import Header from './Header' 

export default {
  components: {
    Header
  },
  data() {
    return {
      signInData: {
        email: '',
        password: '',
        uid: ''
      },
      // 入力欄に誤りがあった場合のエラー表示まとめ
      signInErr: {
        // 入力欄に空白が存在した場合、画面にエラーを表示させる
        // メールアドレス入力欄に不備がある場合、inputを赤枠に変更する
        // パスワード入力欄に不備がある場合、inputを赤枠に変更する
        // メールアドレスまたはパスワードが間違っていた場合、画面にエラーを表示させる
        blankErr: '',
        activeErrEmail: false,
        activeErrPassword: false,
      }
    }
  },
  methods: {
    // signin.jsのstateに格納
    setSignInData() {
      this.$store.commit('setSignInData', this.signInData);
    },
    setSignInErr() {
      this.$store.commit('signInErr', this.signInErr);
    },
    checkValidation() {
      // 処理を完結にするために、undefinedを空白に変換
      if (this.$store.state.signin.signInData.email === undefined || this.$store.state.signin.signInData.password === undefined) {
        this.$store.state.signin.signInData.email = '';
        this.$store.state.signin.signInData.password = '';
      }
      // 新規登録ボタン押下後、メールアドレス入力欄が空欄でない場合メールアドレス入力欄のエラー文、赤枠を消す
      if (this.$store.state.signin.signInData.email !== '') {
        this.signInErr.blankErr = '';
        this.signInErr.activeErrEmail = false;
      } else {
        this.signInErr.blankErr = '空欄の項目が存在します';
        this.signInErr.activeErrEmail = true;
        this.$store.state.signin.typingErr = '';
      }
      // 新規登録ボタン押下後、パスワード入力欄が空欄でない場合パスワード入力欄のエラー文、赤枠を消す
      if (this.$store.state.signin.signInData.password !== '') {
        this.signInErr.blankErr = '';
        this.signInErr.activeErrPassword = false;
      } else {
        this.signInErr.blankErr = '空欄の項目が存在します';
        this.signInErr.activeErrPassword = true;
        this.$store.state.signin.typingErr = '';
      }
      if (this.$store.state.signin.signInData.email === '' || this.$store.state.signin.signInData.password === '') {
        this.signInErr.blankErr = '空欄の項目が存在します';
        this.$store.state.signin.typingErr = '';
      }
    },
    // signin.jsに処理を記述
    signIn() {
      // メールアドレス入力欄が空欄の場合、画面上にエラーを表示
      if (this.$store.state.signin.signInData.email === undefined || this.$store.state.signin.signInData.email === '') {
        this.signInErr.blankErr = '空欄の項目が存在します';
        this.signInErr.activeErrEmail = true;
        this.$store.state.signin.typingErr = '';
        this.checkValidation();
        return
      } else {
        this.signInErr.blankErr = '';
        this.signInErr.activeErrEmail = false;
      }
      // パスワード入力欄が空欄の場合、画面上にエラーを表示
      if (this.$store.state.signin.signInData.password === undefined || this.$store.state.signin.signInData.password === '') {
        this.signInErr.blankErr = '空欄の項目が存在します';
        this.signInErr.activeErrPassword = true;
        this.$store.state.signin.typingErr = '';
        this.checkValidation();
        return
      } else {
        this.signInErr.blankErr = '';
        this.signInErr.activeErrPassword = false;
      }
      this.$store.dispatch('signIn');
    }
  },
  computed: {
    typingErr() {
      return this.$store.state.signin.typingErr;
    }
  }
}
</script>

<style lang="scss" scoped>
// 共通スタイル
.signin__wrap {
  height: 100vh;
  text-align: center;
  background-color: #FAFAFA;
}

.signin__main-wrap {

  h2 {
    margin: 0;
    padding-top: 150px;
    font-weight: normal;
  }
}

.signin__mail-input {
  margin-top: 50px;
  
  label {
    display: block;
    margin-right: 140px;
    font-size: 20px;
  }

  input {
    width: 270px;
    height: 20px;
    margin-top: 15px;
  }
}

.signin__change-color--blank {
  border: 2px solid #FF0000;
}

.signin__pw-input {
  margin-top: 50px;
  
  label {
    display: block;
    margin-right: 180px;
    font-size: 20px;
  }

  input {
    width: 270px;
    height: 20px;
    margin-top: 15px;
  }
}

.signin__err-message {
  position: relative;

  p {
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    color: #FF0000;
  }
}

.signin__btn {
  margin-top: 120px;

  button {
    outline: none;
    text-decoration: none;
    border-radius: 50px;
    cursor: pointer;
    font-weight: bold;
    color: #fff;
    background-color: #000;
    border: 1px solid #000;
    padding: 20px 70px;
    font-size: 20px;
  }

    button:hover {
    padding: 21px 71px;
    font-size: 21px;
  }
}
</style>