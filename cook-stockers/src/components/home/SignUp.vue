<template>
  <div class="signup__container">
    <div class="header">
      <Header></Header>
    </div><!-- header -->
    <div class="signup__wrap">
      <div class="signup__main-wrap">
        <h2>新規登録</h2>
        <div class="signup__name-input">
          <label for="name">ユーザー名</label>
          <input 
          type="text"
          placeholder="ユーザー名"
          v-model="$store.state.signup.signUpData.name"
          :class="{'signup__change-color--blank':signUpErr.activeErrUserName}">
        </div><!-- signup__name-input -->
        <div class="signup__mail-input">
          <label for="mail">メールアドレス</label>
          <input type="text"
          placeholder="email@adress.com"
          v-model="$store.state.signup.signUpData.email"
          :class="{'signup__change-color--blank':signUpErr.activeErrEmail, 
          'signup__change-color-format':signUpErr.activeEmailFormatErr}">
        </div><!-- signup__mail-input -->
        <div class="signup__pw-input">
          <label for="password">パスワード</label>
          <input type="password"
          placeholder="大文字含む8文字以上(記号不可)"
          v-model="$store.state.signup.signUpData.password"
          :class="{'signup__change-color--blank':signUpErr.activeErrPassword,
          'signup__change-color--password-input':signUpErr.activePasswordErr}">
        </div><!-- signup__pw-input -->
        <div class="signup__err-message">
          <p class="signup__blank-err">{{ signUpErr.blankErr }}</p>
          <p class="signup__mail-format-err">{{ signUpErr.emailFormatErr }}</p>
          <p class="signup__password-err">{{ signUpErr.passwordErr }}</p>
        </div><!-- signup__err-message -->
        <div class="signup__btn">
          <button to="/myrecipe" @click="signUp">新規登録</button>
        </div><!-- signup__btn -->
      </div><!-- signup__main-wrap -->
    </div><!-- signup__wrap -->
  </div><!-- signup__container -->
</template>

<script>
import Header from './Header' 

export default {
  components: {
    Header
  },
  data() {
    return {
      signUpData: {
        name: '',
        email: '',
        password: '',
        uid: ''
      },
      // 入力欄に誤りがあった場合のエラー表示まとめ
      signUpErr: {
        // 入力欄に空白が存在した場合、画面にエラー文を表示させる
        // ユーザー名入力欄に不備がある場合、inputを赤枠に変更する
        // メールアドレス入力欄に不備がある場合、inputを赤枠に変更する
        // パスワード入力欄に不備がある場合、inputを赤枠に変更する
        blankErr: '',
        activeErrUserName: false,
        activeErrEmail: false,
        activeErrPassword: false,
        // メールアドレスの書式に不備がある場合、画面にエラー文を表示させる
        // メールアドレスの書式に不備がある場合、inputを赤枠に変更する
        emailFormatErr: '',
        activeEmailFormatErr: false,
        // パスワードが要件を満たしていない場合、画面にエラー分を表示させる
        // パスワードが要件を満たしていない場合、inputを赤枠に変更する
        passwordErr: '',
    activePasswordErr: false
      }
    }
  },
  methods: {
    // signup.jsのstateに格納
    setSignUpData() {
      this.$store.commit('setSignUpData', this.signUpData);
    },
    setSignUpErr() {
      this.$store.commit('setSignUpErr', this.signUpErr);
    },
    cehckValidation() {
      // 処理を完結にするために、undefinedを空白に変換
      if (this.$store.state.signup.signUpData.name === undefined) {
        this.$store.state.signup.signUpData.name = '';
      }
      // メールアドレス欄がundefinedの場合、正規表現のチェックが効かないので、空白にする。
      if (this.$store.state.signup.signUpData.email === undefined) {
        this.$store.state.signup.signUpData.email = '';
      }
      // パスワード欄がundefinedの場合、正規表現のチェックが効かないので、空白にする。
      if (this.$store.state.signup.signUpData.password === undefined) {
        this.$store.state.signup.signUpData.password = '';
      }
      //  新規登録ボタン押下後、ユーザー名入力欄が空欄でない場合ユーザー名入力欄の赤枠を消す
      if (this.$store.state.signup.signUpData.name !== '') {
        this.signUpErr.blankErr = '';
        this.signUpErr.activeErrUserName = false;
      } else {
        this.signUpErr.blankErr = '空欄の項目が存在します';
        this.signUpErr.activeErrUserName = true;
      }
      //  新規登録ボタン押下後、メールアドレス入力欄が空欄でない場合ユーザー名入力欄の赤枠を消す
      if (this.$store.state.signup.signUpData.email !== '') {
        this.signUpErr.blankErr = '';
        this.signUpErr.activeErrEmail = false;
      } else {
        this.signUpErr.blankErr = '空欄の項目が存在します';
        this.signUpErr.activeErrEmail = true;
      }
      //  新規登録ボタン押下後、パスワード入力欄が空欄でない場合パスワード入力欄の赤枠を消す
      if (this.$store.state.signup.signUpData.password !== '') {
        this.signUpErr.blankErr = '';
        this.signUpErr.activeErrPassword = false;
      } else {
        this.signUpErr.blankErr = '空欄の項目が存在します';
        this.signUpErr.activeErrPassword = true;
      }
      if (this.$store.state.signup.signUpData.name === '' || this.$store.state.signup.signUpData.email === '' || this.$store.state.signup.signUpData.password === '') {
        this.signUpErr.blankErr = '空欄の項目が存在します';
      }
      //  新規登録ボタン押下後、メールアドレス入力形式が正常な場合、エラー文と入力欄の赤枠を消す。
      if (this.$store.state.signup.signUpData.email.match(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/) !== null) {
        this.signUpErr.emailFormatErr = '';
        this.signUpErr.activeEmailFormatErr = false;
      } else {
        this.signUpErr.emailFormatErr = 'メールアドレスが有効でありません';
        this.signUpErr.activeEmailFormatErr = true;
      }
      //  新規登録ボタン押下後、パスワード入力形式が正常な場合、エラー文と入力欄の赤枠を消す。
      if (this.$store.state.signup.signUpData.password.match(/^(?=.*[A-Z])[a-zA-Z0-9.?/-]{8,}$/) !== null) {
        this.signUpErr.passwordErr = '';
        this.signUpErr.activePasswordErr = false;
      } else {
        this.signUpErr.passwordErr = 'パスワードは大文字含む8文字以上(記号不可)で設定してください';
        this.signUpErr.activePasswordErr = true;
      }
    },
    // signup.jsに処理を記述
    signUp() {
      // ユーザー名入力欄が空欄の場合、画面上にエラーを表示
      if (this.$store.state.signup.signUpData.name === undefined || this.$store.state.signup.signUpData.name === '') {
        this.signUpErr.blankErr = '空欄の項目が存在します';
        this.signUpErr.activeErrUserName = true;
        this.cehckValidation();
        return
        // ユーザー名入力欄が空欄でない場合、ユーザー名入力欄の赤枠を消す
      } else if (this.$store.state.signup.signUpData.name !== undefined && this.$store.state.signup.signUpData.name !== '') {
        this.signUpErr.blankErr = '';
        this.signUpErr.activeErrUserName = false;
      }
      // メールアドレス入力欄が空欄の場合、画面上にエラーを表示
      if (this.$store.state.signup.signUpData.email === undefined || this.$store.state.signup.signUpData.email === '') {
        this.signUpErr.blankErr = '空欄の項目が存在します';
        this.signUpErr.activeErrEmail = true;
        this.cehckValidation();
        return
        // メールアドレス入力欄が空欄でない場合、メールアドレス入力欄の赤枠を消す
      } else if (this.$store.state.signup.signUpData.email !== undefined && this.$store.state.signup.signUpData.email !== '') {
        this.signUpErr.blankErr = '';
        this.signUpErr.activeErrEmail = false;
      }
      // パスワード入力欄が空欄の場合、画面上にエラーを表示
      if (this.$store.state.signup.signUpData.password === undefined || this.$store.state.signup.signUpData.password === '') {
        this.signUpErr.blankErr = '空欄の項目が存在します';
        this.signUpErr.activeErrPassword = true;
        this.cehckValidation();
        return
        // パスワード入力欄が空欄でない場合、パスワード入力欄の赤枠を消す
      } else if (this.$store.state.signup.signUpData.password !== undefined && this.$store.state.signup.signUpData.password !== '') {
        this.signUpErr.blankErr = '';
        this.signUpErr.activeErrPassword = false;
      }
      // メールアドレスの書式が有効で無い場合,エラー文を表示させる
      if (this.$store.state.signup.signUpData.email.match(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/) === null) {
        this.signUpErr.emailFormatErr = 'メールアドレスが有効でありません';
        this.signUpErr.activeEmailFormatErr = true;
        this.cehckValidation();
        return
      } else {
        this.signUpErr.emailFormatErr = '';
        this.signUpErr.activeEmailFormatErr = false;
      }
      // パスワードが用件に達していない場合、エラー文を表示させる
      if (this.$store.state.signup.signUpData.password.match(/^(?=.*[A-Z])[a-zA-Z0-9.?/-]{8,}$/) === null) {
        this.signUpErr.passwordErr = 'パスワードは大文字含む8文字以上(記号不可)で設定してください';
        this.signUpErr.activePasswordErr = true;
        this.cehckValidation();
        return
      } else {
        this.signUpErr.passwordErr = '';
        this.signUpErr.activePasswordErr = false;
      }
      // signup.jsに処理を渡す
      this.$store.dispatch('signUp');
    }
  },
  computed: {
    blankErr() {
      return this.$store.state.signup.signUpErr.blankErr
    },
    emailFormatErr() {
      return this.$store.state.signup.signUpErr.emailFormatErr
    },
    passwordErr() {
      return this.$store.state.signup.signUpErr.passwordErr
    }
  }
}
</script>

<style lang="scss" scoped>
// 共通スタイル
.signup__wrap {
  height: 100vh;
  text-align: center;
  background-color: #FAFAFA;
}

.signup__main-wrap {

  h2 {
    margin: 0;
    padding-top: 150px;
    font-weight: normal;
  }
}

.signup__name-input {
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

.signup__mail-input {
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

.signup__change-color--blank {
  border: 2px solid #FF0000;
}

.signup__change-color-format {
  border: 2px solid #FF0000;
}

.signup__change-color--password-input {
  border: 2px solid #FF0000;
}

.signup__pw-input {
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

.signup__err-message {
  position: relative;

  p {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    margin: 0;
    color: #FF0000;
  }

  .signup__blank-err {
    top: 20px;
  }

  .signup__mail-format-err {
    top: 50px;
  }

  .signup__password-err {
    top: 80px;
  }
}

.signup__btn {
  margin-top: 120px;

  button {
    outline: none;
    text-decoration: none;
    border-radius: 50px;
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