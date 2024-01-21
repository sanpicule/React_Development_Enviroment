module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    // 暗黙の型強制を禁止し安全性を高めるルール
    '@typescript-eslint/strict-boolean-expressions': [
      'warn',
      { allowString: false, allowNumber: false, allowNullableObject: false },
    ],
    'no-implicit-coercion': 'error',
    '@typescript-eslint/restrict-plus-operands': [
      'error',
      {
        checkCompoundAssignments: true,
        allowBoolean: false,
        allowNullish: false,
        allowNumberAndString: false,
        allowRegExp: false,
        allowAny: false,
      },
    ],
    'prefer-template': 'error',
    // template literal に使用できる型の制限
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowNumber: true,
        allowBoolean: true,
        allowNullable: false,
        allowAny: false,
        allowNever: false,
        allowNullish: false,
        allowRegExp: false,
      },
    ],
  },
}
