# eslint-config

## Installation

First install the package:

```bash
yarn add @ckbab/eslint-config -D
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

## Auto format in VS Code

Open `settings.json` and add/edit the following properties:

```json
"editor.formatOnSave": false,
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.codeActionsOnSave": ["source.formatDocument", "source.fixAll.eslint"],
```

Now your code should be automatically formatted when saving the file.
