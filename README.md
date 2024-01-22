# React 開発環境テンプレート

## 概要

このリポジトリは、Viteを使用した2024年1月時点でのReact開発環境のテンプレートです。
以下のツールや設定が含まれています

#### 開発言語

- TypeScript

#### CSSフレームワーク

- TailwindCSS

#### UIコンポーネント
- shadcn

#### LintingとFormat
- Prettier
- ESLint
- Husky
- lint-staged

#### テストツール
- Vitest

#### CI/CD
- GitHub Actions

#### その他
- Storybook

# インストール
プロジェクトをクローンした後、以下のコマンドを実行して依存関係をインストールしてください。

```bash
  npm install
```

# 使い方と説明

## 開発サーバーの起動

```bash
  npm run dev
```

開発用のサーバーが http://localhost:5174 で起動します。

## ビルド

```bash
  npm run build
```

プロダクション向けにアプリケーションをビルドします。
デフォルトでは、ビルド結果は dist に置かれます。この dist フォルダーを、お好みのプラットフォームにデプロイします。

## アプリをローカルで確認する

```bash
  npm run build
  npm run preview
```

vite preview コマンドは、ローカルで静的なウェブサーバーを起動し、dist のファイルを http://localhost:4173 で確認できます。これは、プロダクションビルドが問題ないかどうかを自分のローカル環境で確認する簡単な方法です。

## 構文チェックとフォーマット
今回のプロジェクトでは、git commitが実行された際に、husky が pre-commit フックをトリガーし、lint-staged が対象のファイルに対して静的解析(ESLint)とフォーマット(Prettier)を自動的に行います。
また、今回のlint-stagedの設定はこちらになります。お好みに合わせて変更してお使いください。
```json
"lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "npm run format",
      "npm run lint:fix"
    ]
  },
```

※下記は、ESLintとPrettierを別々に実行するためのコマンドです。

## ESLint

```bash
npm run lint
```

ESLintを使用してコードをリントします。自動的にエラーを解消したい場合は下記コマンドを入力してください

```bash
npm run lint:fix
```

#### ESLintの設定
こちらは、個人で設定項目を追加してください。
参考↓
https://zenn.dev/noshiro_piko/articles/take-full-advantage-of-typescript-eslint
```cjs
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
```

## Prettier
```bash
  npm run format
```

Prettierのルールに従って、コードをフォーマットします。

#### Pettierの設定
こちらは、個人で設定項目を追加してください
```js
/** @type {import("prettier").config} */
const config = {
  singleQuote: true,
  semi: false,
}

export default config
```

## TailwindCSS
https://tailwindcss.com/

## Shadcn
https://ui.shadcn.com/docs/components/card

まずは、インストールしたいコンポーネントを持ってきます。
```bash
npx shadcn-ui@latest add calendar
```
**使い方**
```tsx
  import { Calendar } from "@/components/ui/calendar"

  const [date, setDate] = React.useState<Date | undefined>(new Date())
  
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
```

## テスト

```bash
npm test
```

Vitestを使用してテストを実行します。

##### このリポジトリで実行している例

まず、*TextInput.tsx*というファイルを作成

```js
import React, { useState } from 'react'

const TextInput = () => {
  const [text, setText] = useState('')
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="Input Element"
      />
      <p>Entered Text: {text}</p>
      <p>Entered Text: {text}</p>
    </div>
  )
}

export default TextInput
```

テスト実行用のファイル（_TextInput.test.tsx_）

```tsx
import userEvent from '@testing-library/user-event'
import TextInput from './TextInput'
import { render, screen } from '@testing-library/react'

test('TextInput Component Text', async () => {
  const user = userEvent.setup()
  render(<TextInput />)

  const textElement = screen.getByText('Entered Text:')
  expect(textElement).toBeInTheDocument()

  const inputElement = screen.getByLabelText('Input Element')
  await user.type(inputElement, 'Hello World')
  expect(screen.getByText('Entered Text: Hello World')).toBeInTheDocument()
})
```

# 構成

TailwindCSS: ユーティリティファーストのCSSフレームワークで、カスタマイズ可能なスタイリングが可能です。

Prettier: コードの自動フォーマッターで、一貫性のあるコードスタイルを維持します。

ESLint: コードの静的解析ツールで、潜在的なバグやスタイルの問題を検出します。

Vitest: Viteの組み込みテストランナーで、シンプルな構成でテストを実行できます。

TypeScript: JavaScriptに静的型チェックを導入し、より安全でメンテナブルなコードを書くことができます。

Husky: Gitフックを使用してコミット前にlint-stagedを実行します。

lint-staged: コミット前に実行するものを設定する。今回はPrettierとESLintを設定。

Storybook: コンポーネントのドキュメンテーションとUIテストを作成できるツールです。

