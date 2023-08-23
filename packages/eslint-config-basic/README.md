# @brucesong/eslint-config-basic

## Features

- [x] Based on [Airbnb JavaScript Style](https://github.com/airbnb/javascript)
- [x] `import`、`export` auto sort
- [x] Resolving conflicts between `ESLint` and `Prettier`

## Usage

### Install

```bash
pnpm add -D eslint @brucesong/eslint-config-basic
```

### Config `.eslintrc.json`

```json
{
  "extends": "@brucesong/eslint-config-basic"
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
