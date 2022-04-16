# eslint-config

## Installation

First install the package:

```bash
npm install @ckbab/eslint-config --save-dev
```

Then install all peer dependencies `eslint-config` rely on:

```bash
npx install-peerdeps @ckbab/eslint-config --dev
```

Then add `.eslintrc.json` to the root folder:

```json
{
  "extends": "@ckbab/eslint-config"
}
```

Finally add `babel.config.js` to root folder:

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
  };
};
```

You're done!

## Getting latest config

First update the package to latest version:

```bash
npm install @ckbab/eslint-config@latest --save-dev
```

Then update all peer dependencies to latest version:

```bash
npx install-peerdeps @ckbab/eslint-config --dev
```
