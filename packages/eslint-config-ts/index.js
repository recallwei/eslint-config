const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')

if (!TS) console.warn('[@bruce/eslint-config] TypeScript is not installed, fallback to JS only.')

const OFF = 0
const WARN = 1
const ERROR = 2

const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: [
    '@bruce/eslint-config-basic',
    'airbnb-typescript/base',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': OFF,
    'no-shadow': OFF,
    '@typescript-eslint/no-shadow': ERROR,
    'no-undef': OFF,
    '@typescript-eslint/no-explicit-any': OFF, // 由 TS 静态检查
    '@typescript-eslint/comma-dangle': OFF, // 由 Prettier 处理
    '@typescript-eslint/consistent-type-imports': ERROR // 强制使用 import type
  },
  settings: {
    'import/resolver': {
      node: {
        tryExtensions: ['.json', '.node', '.js', '.ts', '.d.ts']
      },
      typescript: {
        alwaysTryTypes: true
      }
    }
  }
})
