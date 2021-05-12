# Cook Stockers

<div>
<img src="https://user-images.githubusercontent.com/67499943/117931427-21b64300-b33a-11eb-9b48-e9920e9309fe.png" width="500px">
<img src="https://user-images.githubusercontent.com/67499943/117931644-62ae5780-b33a-11eb-807c-58de492c2cc6.png" width="300px">
</div>

## アプリ概要
料理レシピを保存するサービスです。

自分で考えたレシピを材料や写真と共に保存する事ができます

## アプリURL
https://cook-stockers-5eaa5.web.app/

ファーストビューの「レシピをストックする」から、登録無しでログインいただけます。

## 使用技術
- Vue CLI
- Vuex
- Vue Router
- Firebase
	- Firebase Auth
	- Cloud Firestore
	- Cloud Strage

## 機能一覧
- レシピ管理機能
	- レシピ表示機能
		- レシピ検索機能
		- お気に入り機能
	- レシピ保存機能
	- レシピ削除機能
	- レシピ編集機能
- 買い物メモ機能
	- メモ追加
	- メモ削除
- ユーザー管理機能
	- サインアップ
	- サインイン
	- サインアウト

### レシピ管理機能
<img src="https://user-images.githubusercontent.com/67499943/117931427-21b64300-b33a-11eb-9b48-e9920e9309fe.png" width="500px">

レシピを表示、保存、削除、編集が行えます。

また、お気に入り登録が可能で、絞り込むこともできます。

もちろん、登録したレシピの検索も可能です。

### レシピ保存機能
<img src="https://user-images.githubusercontent.com/67499943/117931757-8b365180-b33a-11eb-81de-7563a24c5bde.png" width="500px">

料理の写真、レシピ名、手順、材料、タグ、メモ、外部レシピURLを登録できます。

登録したレシピは、レシピ一覧から閲覧できます。

### 買い物メモ機能
<img src="https://user-images.githubusercontent.com/67499943/117931844-a739f300-b33a-11eb-9838-88b16543f741.png" width="500px">

簡単な買い物メモです。

メモの登録、削除が行えます。
