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

## Usage

Use the config by adding `.eslintrc.json` to the root folder:

```js
{
  // For ReactJS projects:
  "extends": "@ckbab/eslint-config/web"
  // For NextJS projects:
  "extends": "@ckbab/eslint-config/next"
  // For React Native projects:
  "extends": "@ckbab/eslint-config/native"
  // For NodeJS projects:
  "extends": "@ckbab/eslint-config/node"
}
```

## Configure Babel

Configure Babel depending on your project.

### For ReactJS / NextJS projects

First install the following:

```bash
yarn add @babel/preset-react -D
```

Then add `.babelrc.json` to the root folder:

```json
{
  "presets": ["@babel/preset-react"]
}
```

### For React Native / Expo projects

First installl the following:

```bash
yarn add react-native-reanimated
yarn add babel-preset-expo -D
```

Then add `babel.config.js` to root folder:

```js
module.exports = {
  presets: ["babel-preset-expo"],
  plugins: ["react-native-reanimated/plugin"],
};
```

### For Node projects

First installl the following:

```bash
yarn add @babel/preset-env -D
```

Then add `.babelrc.json` to root folder:

```json
{
  "presets": ["@babel/preset-env"]
}
```

## Format files

Make sure your `package.json` contains the following scripts:

```json
"format": "npx prettier . --write && npx eslint . --fix",
```

Then run `npm run format` in your project's root folder.

## Auto format in VS Code

First install the extensions: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [Format Code Action](https://marketplace.visualstudio.com/items?itemName=rohit-gohri.format-code-action&ssr=false#review-details).

Then open `settings.json` and add/edit the following properties:

```json
"editor.formatOnSave": false,
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.codeActionsOnSave": ["source.formatDocument", "source.fixAll.eslint"],
```

Now your code should be automatically formatted when saving the file.

## Useful links

- https://blog.logrocket.com/using-prettier-eslint-automate-formatting-fixing-javascript/
- https://codinglicks.com/blog/create-a-reusable-eslint-config/
