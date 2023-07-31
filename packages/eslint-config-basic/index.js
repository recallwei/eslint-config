const OFF = 0
const WARN = 1
const ERROR = 2

const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  reportUnusedDisableDirectives: true, // 报告未使用的 eslint-disable 指令
  extends: ['airbnb-base', 'plugin:import/recommended', 'plugin:import/errors', 'plugin:import/warnings', 'prettier'],
  plugins: ['simple-import-sort', 'import', 'unused-imports'],
  settings: {
    'import/resolver': {
      node: { extensions: ['.json', '.js', '.mjs', '.ts', '.d.ts'] }
    }
  },
  rules: {
    quotes: [ERROR, 'single'], // 强制使用单引号
    semi: [ERROR, 'never'], // 禁止使用分号
    'no-unused-vars': OFF,
    'unused-imports/no-unused-imports': ERROR,
    'unused-imports/no-unused-vars': [
      WARN,
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }
    ],
    'class-methods-use-this': OFF, // 允许类方法不使用 this
    'no-param-reassign': [
      ERROR,
      {
        props: true,
        ignorePropertyModificationsFor: ['target', 'descriptor', 'req', 'request', 'args']
      }
    ],
    'simple-import-sort/imports': ERROR, // import 排序
    'simple-import-sort/exports': ERROR, // export 排序
    'import/first': ERROR, // import 必须放在文件顶部
    'import/newline-after-import': ERROR, // import 之后必须空一行
    'import/no-duplicates': ERROR, // 禁止重复导入
    'import/prefer-default-export': OFF, // 默认导出不是强制的
    'import/extensions': OFF, // 允许导入时带文件扩展名
    'import/no-extraneous-dependencies': [ERROR, { devDependencies: true }] // 允许开发依赖
  },
  overrides: [
    {
      files: ['*.js', '*.cjs', '*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': OFF,
        '@typescript-eslint/no-require-imports': OFF
      }
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': OFF
      }
    },
    {
      files: ['scripts/**/*.*'],
      rules: {
        'no-console': OFF
      }
    }
  ]
})
