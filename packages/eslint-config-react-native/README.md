# @brucesong/eslint-config-react-native

## Features

- [x] Suitable for React Native + TypeScript projects
- [x] ~~Based on [Airbnb JavaScript Style](https://github.com/airbnb/javascript)~~
- [x] `import`、`export` auto sort
- [x] Resolving conflicts between `ESLint` and `Prettier`
- [x] Support defining `ESLINT_TSCONFIG` in the env to specify the `tsconfig.json` file path used by ESLint
- [x] Auto check `tsconfig.json`、`tsconfig.eslint.json` file in the project root directory

## About checking the priority of `tsconfig`

1. If `ESLINT_TSCONFIG` is defined in the env, use the path specified in the env
2. If `tsconfig.eslint.json` exists in the project root directory, use this file
3. If `tsconfig.json` exists in the project root directory, use this file

## Usage

### Install

```bash
pnpm add -D eslint @brucesong/eslint-config-react-native
```

### Config `.eslintrc.json`

```json
{
  "extends": "@brucesong/eslint-config-react-native"
}
```

### Add script for `package.json`

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VSCode auto fix

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": false,
    "source.fixAll.eslint": true,
    "source.organizeImports": false
  }
}
```

## License

[MIT](/LICENSE) License &copy; 2023 [Bruce Song](https://github.com/recallwei)
