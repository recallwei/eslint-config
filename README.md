# ESLint Config

This project is managed and released based on monorepo (pnpm workspace and changesets).  
See the publish guide [here](./DEVELOPMENT.md).

## Features

- [x] Based on [Airbnb JavaScript Style](https://github.com/airbnb/javascript)
- [x] Auto sort `import` and `export`
- [x] Support multiple frameworks
  - [ ] React
  - [x] Vue
  - [x] Astro
  - [ ] TypeScript

## Usage

### Install

```bash
pnpm add -D eslint @brucesong/eslint-config-xxx
```

### Config `.eslintrc.json`

```json
{
  "extends": "@brucesong/eslint-config-xxx"
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
