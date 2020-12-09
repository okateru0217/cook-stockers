<template>
  <div class="hamburger__container">
    <!--ハンバーガーメニューのボタン-->
    <div class="hamburger__btn" @click='ActiveBtn=!ActiveBtn'>
      <span class="line line_01" :class="{'btn_line01':ActiveBtn}"></span>
      <span class="line line_02" :class="{'btn_line02':ActiveBtn}"></span>
      <span class="line line_03" :class="{'btn_line03':ActiveBtn}"></span>
    </div>
    <!--サイドバー-->
    <transition name="hamburger__menu">
      <div class="hamburger__menu" v-show="ActiveBtn">
          <ul>
            <li><router-link to="/">ログアウト</router-link></li>
            <li class="hamburger__recommend-site"><p>おすすめレシピサイト</p></li>
            <li><router-link to="/signin">クックパッド</router-link></li>
            <li><router-link to="/signup">クラシル</router-link></li>
            <li><router-link to="/signup">楽天レシピ</router-link></li>
          </ul>
      </div>
    </transition>
  </div><!-- hamburger__container -->
</template>

<script>
export default {
  data() {
    return {
      ActiveBtn: false
    }
  }
}
</script>

<style lang="scss" scoped>
// 共通スタイル
* {
  font-family: 'Raleway', sans-serif;
}

.hamburger__btn {
  position: fixed;
  top: 10.5px;
  left: 4vw;
  width: 70px;
  height: 72px;
  cursor: pointer;
  z-index: 50;

  .line {
  position: absolute;
  top: 0;
  left: 20px;
  width: 35px;
  height: 2px;
  background: #333333;
  text-align: center;
  }

  .line_01 {
  top: 16px;
  transition: 0.4s ease;
  }

  .line_02 {
  top: 26px;
  transition: 0.4s ease;
  }

  .line_03 {
  top: 36px;
  transition: 0.4s ease;
  }
}

.btn_line01 {
  transform: translateY(10px) rotate(-45deg);
  transition: 0.4s ease;
}
.btn_line02 {
  transition: 0.4s ease;
  opacity: 0;
}
.btn_line03 {
  transform: translateY(-10px) rotate(45deg);
  transition: 0.4s ease;
}

// サイドバー
.hamburger__menu-enter-active, .hamburger__menu-leave-active {
  transition: opacity 0.4s;
}
.hamburger__menu-enter, .hamburger__menu-leave-to {
  opacity: 0;
}
.hamburger__menu-leave, .hamburger__menu-enter-to{
  opacity: 1;
}

.hamburger__menu {
  background-color: #c5c5c5;
  z-index: 30;
  padding: 5rem 0;
  position: fixed;
  width: 100%;
  height: 80rem;
  top: 0;
  left: 0;
  text-align: center;

  ul{
    padding: 0;
    padding-top: 40px;
  }

  li {
    padding: 25px 0;
    list-style: none;
    line-height: 1;
  }

  a {
    color: #424242;
    text-decoration: none;
    font-size: 25px;
    margin: 0 4vw;
    padding-bottom: 8px;
  }

  a:hover {
    opacity: 0.6;
  }
}

.hamburger__recommend-site {
  
  p {
    padding-top: 50px;
    font-size: 20px;
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .hamburger__menu {
    
    ul{
      padding-top: 4vw;
    }

    li {
      padding: 25px 0;
    }

    a {
      font-size: 3.5vw;
      margin: 0 4vw;
      padding-bottom: 0.8vw;
    }
  }

  .hamburger__recommend-site {
  
    p {
      padding-top: 5.5vw;
      font-size: 3vw;
    }
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .hamburger__btn {
    display: none;
  }

  .hamburger__menu {
    display: none;
  }
}

</style> 