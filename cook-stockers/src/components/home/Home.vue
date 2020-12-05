<template>
  <div class="home__container">
    <div class="header">
      <Header></Header>
    </div><!-- header -->
    <div class="home__wrap">
      <div class="home__bgimg"></div><!-- home__bgimg -->
      <div class="home__main-wrap">
        <div class="home__ttl">
          <h1>Cook Stockers</h1>
          <p>
            そのレシピ<br>
            ストックしませんか？
          </p>
        </div><!-- home__ttl -->
        <div class="home__btn">
          <router-link to="/myrecipe">レシピをストックする</router-link>
        </div><!-- home__btn -->
      </div><!-- home__main-wrap -->
    </div><!-- home__wrap -->
  </div><!-- home__container -->
</template>

<script>
import Header from './Header' 

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400&display=swap');
// 共通スタイル
* {
  font-family: 'Raleway', sans-serif;
}

.home__wrap {
  position: relative;
}

.home__bgimg {
  width: 100%;
  height: 100vh;
  background-image: url('../../assets/recipe_home_img.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.home__main-wrap {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
}

.home__btn {

  a {
    text-decoration: none;
    border-radius: 50px;
    font-weight: bold;
    color: #fff;
    background-color: #000;
    border: 1px solid #000;
  }
}

// sp用
@media screen and (max-width: 767px) {
  .home__main-wrap {
    top: 40%;

    h1 {
      font-size: 55px;
      font-weight: normal;
    }

    p {
      margin-top: 40px;
      font-size: 25px;
      line-height: 40px;
    }
  }

  .home__btn {
    margin-top: 75px;
    
    a {
      padding: 20px 35px;
      font-size: 20px;
    }

    a:hover {
      padding: 21px 36px;
      font-size: 21px;
    }
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {

  .home__main-wrap {
    top: 40%;

    h1 {
      font-size: 8vw;
      font-weight: normal;
    }

    p {
      margin-top: 5vw;
      font-size: 4vw;
      line-height: 6vw;
    }
  }

  .home__btn {
    margin-top: 10vw;
    
    a {
      padding: 2vw 3.5vw;
      font-size: 2vw;
    }

    a:hover {
      padding: 2.1vw 3.6vw;
      font-size: 2.1vw;
    }
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .home__main-wrap {
    top: 50%;

    h1 {
      font-size: 80px;
      font-weight: normal;
    }

    p {
      margin-top: 50px;
      font-size: 40px;
      line-height: 60px;
    }
  }

  .home__btn {
    margin-top: 100px;
    
    a {
      padding: 20px 35px;
      font-size: 18px;
    }

    a:hover {
      padding: 21px 36px;
      font-size: 19px;
    }
  }
}
</style>