const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')

if (!TS) console.warn('[@bruce/eslint-config] TypeScript is not installed, fallback to JS only.')

const OFF = 0
const WARN = 1
const ERROR = 2

const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: [
    'plugin:tailwindcss/recommended', // TailwindCSS 类名排序、简写合并
    'plugin:vue/vue3-recommended',
    TS ? '@brucesong/eslint-config-ts' : '@brucesong/eslint-config-basic'
  ],
  rules: {
    'vue/no-v-html': OFF, // 允许使用 v-html
    'vue/multi-word-component-names': OFF, // 允许单个单词的组件名，例如 index.vue
    'import/no-absolute-path': OFF, // 允许绝对路径
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      },
      rules: {
        'tailwindcss/no-custom-classname': OFF // TailwindCSS 中允许自定义类名
      }
    }
  ]
})
