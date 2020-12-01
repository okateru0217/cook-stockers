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
          placeholder="UserName"
          v-model="$store.state.signup.signUpData.name">
        </div><!-- signup__name-input -->
        <div class="signup__mail-input">
          <label for="mail">メールアドレス</label>
          <input type="text"
          placeholder="email@adress.com"
          v-model="$store.state.signup.signUpData.email">
        </div><!-- signup__mail-input -->
        <div class="signup__pw-input">
          <label for="mail">パスワード</label>
          <input type="text"
          placeholder="Password"
          v-model="$store.state.signup.signUpData.password">
        </div><!-- signup__pw-input -->
        <div class="signup__btn">
          <router-link to="/myrecipe" @click.native="signUp">新規登録</router-link>
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
        password: ''
      }
    }
  },
  methods: {
    // signup.jsのstateに格納
    setSignUpData() {
      this.$store.commit('setSignUpData', this.signUpData);
    },
    // signup.jsに処理を記述
    signUp() {
      this.$store.dispatch('signUp');
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

.signup__btn {
  margin-top: 120px;

  a {
    text-decoration: none;
    border-radius: 50px;
    font-weight: bold;
    color: #fff;
    background-color: #000;
    padding: 20px 70px;
    font-size: 20px;
  }
}
</style>