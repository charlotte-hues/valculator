# Changesets

This repo uses [Changesets](https://github.com/changesets/changesets) to version and publish public packages.

Public packages:

- `@valculator/interface`
- `@valculator/theme`

Internal packages (`@valculator/data`, `@valculator/context`, `@valculator/images`) are private. Data, context, and images are bundled into `@valculator/interface`, so changes there need a changeset for **interface**, not a publish of the private package.

```sh
yarn changeset
```
