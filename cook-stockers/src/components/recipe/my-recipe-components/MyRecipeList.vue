<template>
  <div class="my-recipe-list__container">
    <div class="my-recipe-list__wrap">
      <div class="my-recipe-list__table">
        <table>
          <tbody>
            <tr>
              <td><p class="my-recipe-list__img">画像</p></td>
              <td class="my-recipe-list__td"><p class="my-recipe-list__recipe-name">レシピ名</p></td>
              <td class="my-recipe-list__td"><p class="my-recipe-list__memo">メモ</p></td>
              <td class="my-recipe-list__td"><p class="my-recipe-list__tag">タグ</p></td>
              <td class="my-recipe-list__favorite-icon"><p>☆</p></td>
            </tr>
          </tbody>
        </table>        
      </div><!-- my-recipe-list__table -->
    </div><!-- my-recipe-list__wrap -->
  </div><!-- my-recipe-list__container -->
</template>

<style lang="scss" scoped>
// 共通スタイル
.my-recipe-list__wrap {

  p {
    margin: 0;
  }
}

.my-recipe-list__table {
  padding-top: 55px;

  tr {
    position: relative;
    display: block;
    padding: 5px 0;
    border-bottom: 1px solid #C1C1C1;
  }

  .my-recipe-list__img {
    padding: 30px;
    border: 1px solid #000;
  }

  .my-recipe-list__td {
    position: absolute;
    top: 0;
    left: 100px;
    display: block;
  }

  .my-recipe-list__recipe-name {
    padding-top: 5px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .my-recipe-list__memo {
    padding-top: 30px;
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

.my-recipe-list__favorite-icon {
  position: absolute;
  top: 5px;
  right: 0;
}

// sp用
@media screen and (max-width: 767px) {
  .my-recipe-list__container {
    margin: 100px 0 70px 0;
  }

  .my-recipe-list__table {
    width: 95%;
    margin: 0 auto;

    tr {
      width: 95vw;
    }

    .my-recipe-list__recipe-name {
      max-width: 69vw;
    }

    .my-recipe-list__memo {
      max-width: 69vw;
    }

    .my-recipe-list__tag {
      max-width: 69vw;
    }
  }
}

// tab用
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .my-recipe-list__container {
    margin: 100px 0 70px 0;
  }

  .my-recipe-list__table {
    width: 95%;
    margin: 0 auto;

    tr {
      width: 95vw;
    }

    .my-recipe-list__recipe-name {
      max-width: 80vw;
    }

    .my-recipe-list__memo {
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
      width: 45vw;
    }

    .my-recipe-list__recipe-name {
      max-width: 35vw;
    }

    .my-recipe-list__memo {
      max-width: 35vw;
    }

    .my-recipe-list__tag {
      max-width: 35vw;
    }
  }
}
</style>