<template>
  <div class="side-menu__container">
    <div class="side-menu__wrap">
      <div class="side-menu__serch">
        <Search></Search>
      </div><!-- side-menu__serch -->
      <div class="side-menu__nav">
        <nav>
          <ul>
            <li><router-link to="/myrecipe">マイレシピ</router-link></li>
            <li><a @click="routerNewRecipe">新しいレシピ</a></li>
            <li><router-link to="/shoppingmemo">買い物メモ</router-link></li>
            <li><a @click="signOut">ログアウト</a></li>
            <li class="side-menu__recommend-site"><p>おすすめレシピサイト</p></li>
            <li><a :href="cookpad" target="_blank" rel="noopener noreferrer">クックパッド</a></li>
            <li><a :href="kurashiru" target="_blank" rel="noopener noreferrer">クラシル</a></li>
            <li><a :href="rakuten" target="_blank" rel="noopener noreferrer">楽天レシピ</a></li>
          </ul>
        </nav>
      </div><!-- side-menu__nav -->
    </div><!-- side-menu__wrap -->
  </div><!-- side-menu__container -->
</template>

<script>
import Search from './SideMenuSearch'
import router from '../../router'

export default {
  components: {
    Search
  },
  data() {
    return {
      cookpad: 'https://cookpad.com/',
      kurashiru: 'https://www.kurashiru.com/',
      rakuten: 'https://recipe.rakuten.co.jp/'
    }
  },
  methods: {
    routerNewRecipe() {
      this.$store.state.recordRecipe.switcherAddEditBtn = true;
      router.push('/newrecipe');
    },
    signOut() {
      this.$store.dispatch('signOut');
    }
  }
}
</script>

<style lang="scss" scoped>
// 共通スタイル
* {
  font-family: 'Raleway', sans-serif;
}

// sp用
@media screen and (max-width: 767px) {
  .side-menu__container {
    display: none;
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .side-menu__container {
    display: none;
  }
}

// pc用
.side-menu__wrap {
  position: fixed;
  max-width: 375px;
  width: 25%;
  height: 100vh;
  background-color: #EDEDED;
}

.side-menu__nav {
  
  ul {
    margin: 0;
    padding-left: 70px;
  }

  li {
    padding: 25px 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #000;
    display: inline-block; 
    text-align: center;
    position: relative;
    overflow: hidden;
    transition: 0.4s;
    padding-bottom: 6px;
  }

  a:after {
    position: absolute;
    transition: 0.4s;
    content: "";
    width: 0;
    bottom: 0;
    height: 2px;
    background: #545454;
    left: 0;
  }

  a:hover {
    text-decoration: none;
    color: #000;
    cursor: pointer;
  }

  a:hover:after {
    width: 100%;
    left: 0;
  }
}

.side-menu__recommend-site {

  p {
    padding-top: 20px;
  }
}
</style>