<template>
  <div class="header__container">
    <div class="header__wrap">
      <div class="header__hamburger">
        <HeaderHamburger></HeaderHamburger>
      </div><!-- header__hamburger -->
      <div class="header__ttl">
        <h1><router-link to="/">Cook Stockers</router-link></h1>
      </div><!-- header__ttl -->
      <div class="header__nav">
        <nav>
          <ul>
            <li><router-link to="/myrecipe">ゲスト様</router-link></li>
            <li><router-link to="/signin">ログイン</router-link></li>
            <li><router-link to="/signup">新規登録</router-link></li>
          </ul>
        </nav>
      </div><!-- header__nav -->
    </div><!-- header__wrap -->
  </div><!-- header__container -->
</template>

<script>
import HeaderHamburger from './HeaderHamburger' 

export default {
  components: {
    HeaderHamburger
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400&display=swap');
// 共通スタイル
* {
  font-family: 'Raleway', sans-serif;
}

.header__container {
  position: fixed;
  z-index: 10;
  width: 100vw;
  background-color: #fff;
}

.header__wrap {
  width: 85%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.header__ttl {

  a {
    text-decoration: none;
    color: #000;
  }

  a:hover {
    opacity: 0.6;
  }
}

.header__nav {
  display: flex;
  align-items: center;

  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding: 0 20px;
  }

  a {
    padding-bottom: 10px;
    text-decoration: none;
    color: #000;
  }

  a:hover {
    border-bottom: 1px solid #000;
  }
}


// sp用
@media screen and (max-width: 767px) {
  .header__container {
    height: 70px;
  }

  .header__wrap {
    justify-content: center;
  }

  .header__ttl {

    h1 {
      text-align: center;
      font-size: 30px;
    }
  }

  .header__nav {
    display: none;
  }

}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .header__container {
    height: 10vw;
  }

  .header__ttl {
    width: 40vw;
    
    h1 {
      font-size: 4vw;
    }
  }

  .header__nav {
    
    li {
      width: 9vw;
      font-size: 2vw;
    }

    li:hover {
      font-size: 2.1vw;
    }
  }

}

// pc用
@media screen and (min-width: 1024px) {
  .header__container {
    height: 100px;
  }

  .header__ttl {
    width: 40vw;

    h1 {
      font-size: 40px;
    }
  }

  .header__nav {
  
    li {
      width: 90px;
      font-size: 20px;
    }

    li:hover {
      font-size: 21px;
    }
  }

}

</style>