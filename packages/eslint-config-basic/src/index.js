const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  env: {
    es6: true,
    browser: true,
    commonjs: true,
    node: true
  },
  reportUnusedDisableDirectives: true,
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier'
  ],
  plugins: ['simple-import-sort', 'import', 'unused-imports'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.cjs', '.mjs']
      }
    }
  },
  rules: {
    quotes: ['error', 'single'], // 强制使用单引号
    semi: ['error', 'never'], // 禁止使用分号
    'no-unused-vars': 'off',
    'class-methods-use-this': 'off', // 允许类方法不使用 this
    'no-param-reassign': [
      'warn',
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
    ], // 允许修改函数参数，但是会有警告

    // eslint-plugin-unused-imports
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
    'import/prefer-default-export': 'off' // 仅导出一个变量时，不要求默认导出
  }
})
