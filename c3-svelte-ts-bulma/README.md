# 🟩 Rrea-Client 3 (C3)

![npm](https://img.shields.io/badge/npm-0.1.0-84CC16.svg?style=flat-square)  ![License](https://img.shields.io/badge/License-MIT-0284C7.svg?logo=&style=flat-square)

Demo（デフォルト版）: **[Client]() | [Admin]()**  ・  GitHub: **[Server](https://github.com/kensoz/Rrea-server) | [Admin]() | [Client](https://github.com/kensoz/Rrea-client) | [Client-Collection](https://github.com/kensoz/Rrea-client-collection)**

##### Rrea-Client 3 について

メンバー位置と情報の管理システムメンバー用サイト(Client)のSvelte.js版です。\

新しいフレームワークSvelte.jsを試したく、使ったことがないBulmaとpnpmも使って構築しました。



## スタック

+ ⚡️ Svelte.js
+ ⚙️ TypeScript
+ 🎨 Bulma
+ 📑 Eslint + Prettier
+ 🏭 Vite
+ 📦 pnpm
+ 🔺 RESTful API



## 使用

##### 初めに

pnpmを使っているので、pnpm のインストールが必要

```bash
npm install -g pnpm@next-7
```

##### インストール

```bash
pnpm install
```

##### 開発

[http://localhost:3000](http://localhost:3000)で起動

```bash
pnpm run dev
```

##### ビルド

```bash
pnpm run build
```



## 資料＆注意事項

+ Viteが見つからないエラーが出ることがあります。対策として再インストールすれば、解決できると思います
+ pnpm環境でPrettierの設定について：https://qiita.com/kensoz/items/8d81ba371858224c1c67
