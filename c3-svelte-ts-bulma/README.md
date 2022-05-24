# Rrea Client 3 (C3)

Rrea Client その3の Svelte.js 版、Bulma、pnpm色々業務で使ったことがないものを試した
pnpm環境でPrettierの設定にハマったが、pnpmの速さと効率性を感じた

バックエンドGitHub：

### スタック

+ ⚡️ Svelte.js
+ ⚙️ TypeScript
+ 🎨 Bulma
+ 📑 Eslint + Prettier
+ 🏭 Vite
+ 📦 pnpm
+ 🔺 RESTful API

### 使用

###### 初めに

pnpmを使っているので、pnpm のインストールが必要

```bash
npm install -g pnpm@next-7
```

###### インストール

```bash
pnpm install
```

###### 開発

```bash
pnpm run dev
```

###### コンパイラ

```bash
pnpm run build
```

### 最後

たまに、Viteが見つからないエラーが出る。対策として`node_modules`を削除し、再インストールすれば、解決できると思う
pnpm環境でPrettierの設定について：https://qiita.com/kensoz/items/8d81ba371858224c1c67

Enjoy !
