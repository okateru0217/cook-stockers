<template>
  <div class="my-recipe-list__container">
    <div class="my-recipe-list__wrap">
      <div class="my-recipe-list__table">
        <table>
          <tbody>
            <tr v-for="memos in $store.state.addShoppingMemo.displayMemoArr"
            :key="memos.memoIndex">
              <td
              class="shopping-memo-list_memo"><p class="my-recipe-list__recipe-name">{{ memos.memo }}</p></td>
              <td
              class="shopping-memo-list__delete-btn"
              ><a @click="deleteMemo(memos)">削除</a></td>
            </tr>
            <tr class="my-recipe-list__add-shopping-memo">
              <td><input 
              type="text" 
              placeholder="ここからレシピを追加できます"
              v-model="$store.state.addShoppingMemo.addMemoValue"></td>
              <a @click="addMemo">追加</a>
            </tr>
          </tbody>
        </table>
      </div><!-- my-recipe-list__table -->
    </div><!-- my-recipe-list__wrap -->
  </div><!-- my-recipe-list__container -->
</template>

<script>
export default {
  methods: {
    addMemo() {
      this.$store.dispatch('addMemo');
    },
    deleteMemo(memos) {
      this.$store.dispatch('deleteMemo', memos);
    }
  }
}
</script>

<style lang="scss" scoped>
// 共通スタイル
.my-recipe-list__wrap {

  p {
    margin: 0;
  }
}

.my-recipe-list__table {
  padding-top: 70px;

  tr {
    position: relative;
    display: block;
    padding: 5px 0;
    border-bottom: 1px solid #C1C1C1;
  }

  input {
    border: none;
    outline: none;
  }

  .my-recipe-list__recipe-name {
    padding-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .my-recipe-list__tag {
    padding-top: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.shopping-memo-list_memo {
  width: 47vw;
}

.shopping-memo-list__delete-btn {
  position: absolute;
  top: 50%;
  right: 9px;
  transform: translateY(-50%);

  a {
    cursor: pointer;
    padding: 3px 10px;
    color: #FFF;
    background-color: #FF6200;
    border: 1px solid #FF6200;
    border-radius: 20px;
  }

  a:hover {
    padding: 4px 11px;
  }
}

.my-recipe-list__add-shopping-memo {
  position: relative;

  a {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    padding: 3px 10px;
    color: #FFF;
    background-color: #FCBB0A;
    border: 1px solid #FCBB0A;
    border-radius: 20px;
    cursor: pointer;
  }

  a:hover {
    padding: 4px 11px;
  }
}

// sp用
@media screen and (max-width: 767px) {
  .my-recipe-list__table {
    width: 95%;
    margin: 0 auto;

    tr {
      width: 95vw;
    }

    input {
      width: 93vw;
    }

    .my-recipe-list__recipe-name {
      max-width: 69vw;
    }

    .my-recipe-list__tag {
      max-width: 69vw;
    }
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .my-recipe-list__table {
    width: 95%;
    margin: 0 auto;

    tr {
      width: 95vw;
    }

    input {
      width: 93vw;
    }

    .my-recipe-list__recipe-name {
      max-width: 80vw;
    }

    .my-recipe-list__tag {
      max-width: 80vw;
    }
  }
}

// pc用
@media screen and (min-width: 1024px) {
  .my-recipe-list__table {
    margin-left: 1vw;

    tr {
      width: 47vw;
    }

    input {
      width: 46vw;
    }

    .my-recipe-list__recipe-name {
      max-width: 35vw;
    }

    .my-recipe-list__tag {
      max-width: 35vw;
    }
  }
}
</style>