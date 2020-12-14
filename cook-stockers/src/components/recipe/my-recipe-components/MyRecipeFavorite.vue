<template>
  <div class="my-recipe-favorite__container">
    <div class="my-recipe-favorite__wrap">
      <button class="normal" 
      @click="normalBtn" 
      :class="{forcus: CengeColorBtn, 'not-forcus': !CengeColorBtn}">通常</button>
      <button class="favorite"
      @click="favoriteBtn"
      :class="{forcus: !CengeColorBtn, 'not-forcus': CengeColorBtn}">お気に入り</button>
    </div><!-- my-recipe-favorite__wrap -->
  </div><!-- my-recipe-favorite__container -->
</template>

<script>
export default {
  data() {
    return {
      CengeColorBtn: true
    }
  },
  methods: {
    normalBtn() {
      this.CengeColorBtn = true;
    },
    favoriteBtn() {
      this.CengeColorBtn = false;
    }
  }
}
</script>

<style lang="scss" scoped>
// 共通スタイル
* {
  font-family: 'Raleway', sans-serif;
}

.my-recipe-favorite__container {
  position: fixed;
  top: 13%;
  left: 50%;
  transform: translateX(-50%);
}

.my-recipe-favorite__wrap {
  
  button {
    outline: none;
  }
}

.normal {
  width: 96px;
  margin-right: 5px;
  border: 1px solid #FF6200;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
  transition: .3s;
}

.normal:hover {
  box-shadow: 0 0 2px rgba(0,0,0,0.2);
}

.favorite {
  margin-left: 5px;
  border: 1px solid #FF6200;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
  transition: .3s;
}

.favorite:hover {
  box-shadow: 0 0 2px rgba(0,0,0,0.2);
}

.forcus {
  color: #fff;
  background-color:#FF6200;
}

.not-forcus {
  color: #FF6200;
  background-color:#fff;
}

// pc用
@media screen and (min-width: 1024px) {
  .my-recipe-favorite__container {
    display: none;
  }
}
</style>