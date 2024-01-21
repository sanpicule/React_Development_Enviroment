# React + TypeScript + Vite

このテンプレートは、ReactをViteで動作させるための最小限のセットアップと、HMRおよびいくつかのESLintルールを提供します。

現在、2つの公式プラグインが利用可能です:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) は、Fast Refreshに[Babel](https://babeljs.io/)を使用します
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) は、Fast Refreshに[SWC](https://swc.rs/)を使用します

## ESLint構成の拡張

本番向けのアプリケーションを開発している場合、タイプに注意したLintルールを有効にするために構成を更新することをお勧めします:

- 以下のようにトップレベルの `parserOptions` プロパティを構成します:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- `plugin:@typescript-eslint/recommended` を `plugin:@typescript-eslint/recommended-type-checked` または `plugin:@typescript-eslint/strict-type-checked` に置き換えます
- オプションで `plugin:@typescript-eslint/stylistic-type-checked` を追加します
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) をインストールし、`extends` リストに `plugin:react/recommended` および `plugin:react/jsx-runtime` を追加します

## 今回インストールしたモジュール一覧

- vite-tsconfig-paths
- vitest
- happy-dom
- @vitest/coverage
- @testing-library/react
- @testing-library/user-event
- @testing-library/jest-dom
