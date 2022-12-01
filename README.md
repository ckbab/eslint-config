# eslint-config

## Installation

First install the package:

```bash
yarn add @ckbab/eslint-config -D
```

Then install all peer dependencies `eslint-config` uses:

```bash
npx install-peerdeps @ckbab/eslint-config --dev
```

For ReactJS projects also install:

```bash
yarn add eslint-plugin-hooks eslint-plugin-react eslint-plugin-react-hooks -D
```

For NextJS projects also install:

```bash
yarn add eslint-config-next eslint-plugin-hooks eslint-plugin-react eslint-plugin-react-hooks -D
```

For React Native projects also install:

```bash
yarn add eslint-plugin-react-native eslint-plugin-hooks eslint-plugin-react eslint-plugin-react-hooks -D
```

## Usage

Use the config by adding `.eslintrc.json` to the root folder:

```js
{
  // For ReactJS projects:
  "extends": "@ckbab/eslint-config/web"
  // For NextJS projects:
  "extends": "@ckbab/eslint-config/next"
  // For NodeJS projects:
  "extends": "@ckbab/eslint-config/node"
  // For React Native projects:
  "extends": "@ckbab/eslint-config/native"
}
```

## Configure Babel

Configure Babel depending on your project.

First install the following:

```js
// For ReactJS/NextJS projects:
yarn add @babel/preset-react -D
// For NodeJS projects:
yarn add @babel/preset-env -D
// For React Native projects:
yarn add babel-preset-expo -D
yarn add react-native-reanimated
```

Then for ReactJS/NextJS/NodeJS projects add `.babelrc.json` to the root folder:

```js
{
  // For ReactJS projects:
  "presets": ["@babel/preset-react"]
  // For NextJS projects:
  "presets": ["@babel/preset-react", "next/babel"]
  // For NodeJS projects:
  "presets": ["@babel/preset-env"]
}
```

For React Native projects, instead of a `.babelrc.json` file, add `babel.config.js` to root folder:

```js
module.exports = {
  presets: ["babel-preset-expo"],
  plugins: ["react-native-reanimated/plugin"],
};
```

## Format files

Make sure your `package.json` contains the following scripts:

```json
{
  "format": "npx prettier . --write && npx eslint . --fix"
}
```

Then run `npm run format` in your project's root folder.

## Auto format in VS Code

First install the extensions: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [Format Code Action](https://marketplace.visualstudio.com/items?itemName=rohit-gohri.format-code-action&ssr=false#review-details).

Then open `settings.json` and add/edit the following properties:

```json
{
  "editor.formatOnSave": false,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": ["source.formatDocument", "source.fixAll.eslint"]
}
```

Now your code should be automatically formatted when saving the file.

## Useful links

- https://blog.logrocket.com/using-prettier-eslint-automate-formatting-fixing-javascript/
- https://codinglicks.com/blog/create-a-reusable-eslint-config/
