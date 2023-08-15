# How to publish by using changesets

## Init changeset

```bash
pnpm add -D @changesets/cli
pnpm changeset init
```

## Create a changeset

```bash
pnpm changeset
```

Then select the packages you want to publish.  
We can choose multiple packages.  
And select which type of changeset it is.

## Update version of packages

```bash
pnpm changeset version
```

## Publish pakcages

```bash
pnpm changeset publish
```
