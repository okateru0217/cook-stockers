<template>
  <div class="shopping-memo-all-delete-btn__container">
    <div class="shopping-memo-all-delete-btn__wrap">
      <a @click="allDeleteMemo">一括削除</a>
    </div><!-- shopping-memo-all-delete-btn__wrap -->
  </div><!-- shopping-memo-all-delete-btn__container -->
</template>

<script>
export default {
  methods: {
    // メモ欄を一括削除する
    allDeleteMemo() {
      this.$store.dispatch('allDeleteMemo');
    }
  }
}
</script>

<style lang="scss" scoped>
// 共通スタイル
* {
  font-family: 'Raleway', sans-serif;
}

.shopping-memo-all-delete-btn__wrap {
  text-align: center;
  background-color: #EDEDED;

  a {
    cursor: pointer;
    outline: none;
    text-decoration: none;
    border-radius: 50px;
    font-weight: bold;
    color: #fff;
    background-color: #FF6200;
    border: 1px solid #FF6200;
  }
}

// sp用
@media screen and (max-width: 767px) {
  .shopping-memo-all-delete-btn__wrap {
    
    a {
      padding: 10px 20px;
      font-size: 16px;
    }

    a:hover {
      padding: 11px 21px;
    }
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .shopping-memo-all-delete-btn__wrap {
    
    a {
      padding: 10px 30px;
      font-size: 16px;
    }

    a:hover {
      padding: 11px 31px;
    }
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .shopping-memo-all-delete-btn__wrap {
    
    a {
      padding: 7px 20px;
      font-size: 15px;
    }

    a:hover {
      padding: 8px 21px;
    }
  }
}
</style>