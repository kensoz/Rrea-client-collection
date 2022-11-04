# 🌈 Rrea-Client-Collection

![Node](https://img.shields.io/badge/Node.js-v18.0.0-fb7185.svg?logo=&style=flat-square)   ![npm](https://img.shields.io/badge/npm-1.0.0-84CC16.svg?style=flat-square)  ![License](https://img.shields.io/badge/License-MIT-0284C7.svg?logo=&style=flat-square)　   

Site（デフォルト版）:  **[Client](http://rrea-client.live) | [Admin](http://rrea-admin.live)**  ・  GitHub:  **[Server](https://github.com/kensoz/Rrea-server) | [Admin](https://github.com/kensoz/Rrea-admin) | [Client](https://github.com/kensoz/Rrea-client)**

##### Rrea-Client-Collectionとは

メンバー情報管理システムの[デフォルトClient](https://github.com/kensoz/Rrea-client)はVue.jsによる構築、公開しましたが、  
React.js、Svelte.jsなどのスタックで別のバージョンも開発しましたので、このRrea-Client-Collectionhは別のバージョンを収集している場所です。



##### Yarn Workspace

モジュールを管理しやすいため、Yarn workspaceによる構成しています。  
それぞれのlockファイルがありますので、個別でのインストール、利用もできます。



## コレクション

-  🟨 C1：[Vue.js（デフォルト版）](https://github.com/kensoz/Rrea-client)
-  🟦 C2：[React.js版](https://github.com/kensoz/Rrea-client-collection/tree/master/c2-react18-ts-mui) 
-  🟩 C3：[Svelte.js版](https://github.com/kensoz/Rrea-client-collection/tree/master/c3-svelte-ts-bulma)
-  🟪 C4：[Vue.js + Pinia.js状態管理ライブラリ版](https://github.com/kensoz/Rrea-client-collection/tree/master/c4-vue3-ts-quasar)



## TODO

+ 🚧 C5：[HTML+SASS+TypeScript版](https://github.com/kensoz/Rrea-client-collection/tree/master/c5-html-ts-sass)



## 使用

##### インストール

全プロジェクトをインストール

```bash
yarn install
```

##### 開発

dev（開発）は個別で実行した方がいいです  
個別実行の際に、C3は`pnpm`を使っていますので、要注意です

C2：[http://localhost:3012](http://localhost:3012)   
C3：[http://localhost:3013](http://localhost:3013)   
C4：[http://localhost:3014](http://localhost:3014)

```bash
yarn dev:c2
yarn dev:c3
yarn dev:c4
```

##### ビルド

全プロジェクトをビルド

```bash
build:all
```

個別で実行

```bash
yarn build:c2
yarn build:c3
yarn build:c4
```

