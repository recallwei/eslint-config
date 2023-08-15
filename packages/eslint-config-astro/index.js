const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  env: {
    node: true,
    es2023: true,
    browser: true
  },
  extends: [
    'plugin:tailwindcss/recommended', // TailwindCSS 类名排序、简写合并
    'eslint:recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier'
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'simple-import-sort',
    'import',
    'unused-imports'
  ],
  parserOptions: {
    project: 'tsconfig.eslint.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  overrides: [
    {
      files: ['*.{js,mjs,cjs}'],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': 'off',
        '@typescript-eslint/triple-slash-reference': 'off' // 允许使用 /// <reference path="" />
      }
    },
    {
      files: ['*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'no-undef': 'off',
        '@typescript-eslint/no-explicit-any': 'off', // 由 TS 静态检查
        '@typescript-eslint/comma-dangle': 'off', // 由 Prettier 处理
        '@typescript-eslint/consistent-type-imports': 'error' // 强制使用 import type
      }
    },
    {
      files: ['scripts/*.{js,ts}'],
      rules: {
        'no-console': 'off' // 允许在脚本中使用 console
      }
    },
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        project: 'tsconfig.eslint.json'
      },
      globals: {
        Astro: 'readonly'
      },
      rules: {
        'import/no-unresolved': [
          'error',
          {
            ignore: ['@/*', 'astro:content', '~icons/*']
          }
        ],
        'react/jsx-filename-extension': [1, { extensions: ['.astro'] }]
      }
    }
  ],
  rules: {
    quotes: ['error', 'single'], // 强制使用单引号
    semi: ['error', 'never'], // 禁止使用分号
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ],
    'class-methods-use-this': 'off', // 允许类方法不使用 this
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'target',
          'descriptor',
          'req',
          'request',
          'args'
        ]
      }
    ],

    // eslint-plugin-simple-import-sort
    'simple-import-sort/imports': 'error', // import 排序
    'simple-import-sort/exports': 'error', // export 排序

    // eslint-plugin-import
    'import/order': 'off', // 禁用 import 排序，使用 simple-import-sort
    'import/first': 'error', // import 必须放在文件顶部
    'import/newline-after-import': 'error', // import 之后必须空一行
    'import/no-unresolved': 'off', // 允许导入未解析的模块
    'import/no-absolute-path': 'off', // 允许导入绝对路径
    'import/no-duplicates': 'error', // 禁止重复导入
    'import/extensions': 'off', // 允许导入时带文件扩展名
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        peerDependencies: true,
        optionalDependencies: false
      }
    ], // 允许 devDependencies，peerDependencies，不允许 optionalDependencies
    'import/no-mutable-exports': 'error', // 禁止导出 let, var 声明的变量
    'import/no-self-import': 'error', // 禁止自导入
    'import/prefer-default-export': 'off', // 仅导出一个变量时，不要求默认导出

    // TailwindCSS
    'tailwindcss/classnames-order': 'error', // TailwindCSS 类名排序
    'tailwindcss/enforces-shorthand': 'error', // TailwindCSS 简写合并
    'tailwindcss/no-custom-classname': 'off', // TailwindCSS 中允许自定义类名

    // React
    'react/destructuring-assignment': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off'
  }
})
