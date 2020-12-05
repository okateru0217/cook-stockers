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
          v-model="$store.state.signin.signInData.email">
        </div><!-- signin__mail-input -->
        <div class="signin__pw-input">
          <label for="password">パスワード</label>
          <input 
          type="password"
          placeholder="Password"
          v-model="$store.state.signin.signInData.password">
        </div><!-- signin__pw-input -->
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
        password: ''
      }
    }
  },
  methods: {
    // signin.jsのstateに格納
    setSignInData() {
      this.$store.commit('setSignInData', this.signInData);
    },
    // signin.jsに処理を記述
    signIn() {
      this.$store.dispatch('signIn');
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

.signin__btn {
  margin-top: 120px;

  button {
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