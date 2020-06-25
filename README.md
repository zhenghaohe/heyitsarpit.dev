# NextJS Template

A template for starting new a NextJS project, includes intiial setup setup for eslint, prettier, redux and includes emotion(styled).

## Major inclusions

- [Typescript](https://www.typescriptlang.org/)
- [Emotion](https://emotion.sh/docs/introduction)
- [Redux](https://redux.js.org/) / [React-Redux](https://react-redux.js.org/)
- [ESlint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [husky](https://github.com/typicode/husky) / [lint-staged](https://github.com/okonet/lint-staged#readme)
- [Normalize.css](https://necolas.github.io/normalize.css/)

## How to use this template

- Create your own repository by clicking on the the [Use this template](https://github.com/arpit73/NextJS-Template/generate) button.
- Update the MIT [License](./LICENSE) file, with current year and your name. Or just add another license if you wish.
- Update the app related information in [package.json](./package.json)

## Included in this template

- Setup for eslint and prettier targeting NextJS development and some useful rules.
- Setup for Redux (react-redux, redux-logger, redux-thunk, redux-devtools-extension)
- A typed [useSelector](./utils/useSelector.ts) hook using the type of your rootReducer.
- Husky for creating a pre-commit hook that runs eslint every time you commit.
- lint-staged to make sure you only run eslint on the staged(.js, jsx, ts.tsx) files. Save time by excluding the files that didn't change in a particular commit.
- normalize.css to make your UI more consistent across browsers.

**Note**

```
The repo has a `yarn.lock` at the root, you may simply delete it and continue with `npm` if you wish to use that instead.
```

## Open to Contributions

This repository is open to contributions, if you have enhancements in mind then feel free to open a pull request.

The goal of this template is to be a somewhat bare bones and yet serve as a strong and stable starting point for any major NextJS project. Any proposed changes must be minimal.
