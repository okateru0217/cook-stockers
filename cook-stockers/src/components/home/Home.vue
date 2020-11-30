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
  background-image: url('../../assets/recipe_home_img.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.home__main-wrap {
  position: absolute;
  text-align: center;
}

.home__btn {

  a {
    text-decoration: none;
    border-radius: 50px;
    font-weight: bold;
    color: #fff;
    background-color: #000;
  }
}

// sp用
@media screen and (max-width: 767px) {
  .home__bgimg {
    height: 90vh;
  }

  .home__main-wrap {
    top: 120px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;

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
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .home__bgimg {
    height: 90vh;
  }

  .home__main-wrap {
    top: 65px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;

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
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .home__bgimg {
    height: 90vh;
  }

  .home__main-wrap {
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;

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
  }
}
</style>