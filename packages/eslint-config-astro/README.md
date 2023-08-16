# @brucesong/eslint-config-astro

## 特性

- [x] 适用于 Astro + React + TypeScript + TailwindCSS 项目
- [x] 基于 [Airbnb JavaScript Style](https://github.com/airbnb/javascript)
- [x] import、export 排序
- [x] TailwindCSS 类名排序、自动合并类名
- [x] 解决 ESLint 与 Prettier 冲突
- [x] 支持在环境变量中定义 `ESLINT_TSCONFIG` 指定 ESLint 使用的 `tsconfig.json` 文件路径
- [x] 自动检测 `tsconfig.json`、`tsconfig.eslint.json` 文件

## 关于检测 tsconfig 的优先级

1. 如果在环境变量中定义了 `ESLINT_TSCONFIG`，则使用环境变量中指定的路径
2. 如果项目根目录下存在 `tsconfig.eslint.json`，则使用该文件
3. 如果项目根目录下存在 `tsconfig.json`，则使用该文件
