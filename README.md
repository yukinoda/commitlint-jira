<div align="center">
  <img width="300" height="200"
    src="https://raw.githubusercontent.com/Gherciu/commitlint-jira/master/logo.png">
  <h1>commitlint-jira</h1>
  <p>Shareable commitlint config enforcing Jira commits messages style</p>
</div>

![GitHub](https://img.shields.io/github/license/Gherciu/commitlint-jira)

## Getting started.

##### Install dependencies

```bash
npm install --save-dev @commitlint/cli commitlint-plugin-jira-rules commitlint-config-jira
```

- [commitlint-config-jira](https://github.com/Gherciu/commitlint-jira/packages/commitlint-config-jira) - is a **recomended** config who contain preconfigured rules for jira commits messages style. See all rules in description below
- [commitlint-plugin-jira-rules](https://github.com/Gherciu/commitlint-jira/packages/commitlint-plugin-jira-rules) - is a plugin that implement all jira commits messages style rules and validate commit messages

##### Configure commitlint to use jira commits messages style config

```js
// commitlint.config.js
module.exports = {
  plugins: ['commitlint-plugin-jira-rules'],
  extends: ['commitlint-config-jira'],
}
```

##### To lint commits before they are created you can use Husky's 'commit-msg' hook

```json
// package.json
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}
```

## Rules

`jira-task-id-max-length` - this rule check if jira task id length is loonger that the provided value.

```bash
// Preconfigured and recomended value in commitlint-config-jira is 8 chars
// ❌ Bad commit messages
git commit -m"IB-2121212121212121: My commit message body"
// ✅ Good commit messages
git commit -m"IB-2121: My commit message body"
git commit -m"IB-21: My commit message body"
```

`jira-task-id-min-length` - this rule check if jira task id length is shorter that the provided value.

```bash
// Preconfigured and recomended value in commitlint-config-jira is 4 chars
// ❌ Bad commit messages
git commit -m"I1: My commit message body"
// ✅ Good commit messages
git commit -m"IB-2121: My commit message body"
git commit -m"IB-21: My commit message body"
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**[@Gherciu/commitlint-jira](https://github.com/Gherciu/commitlint-jira)** © [GHERCIU](https://github.com/Gherciu), Released under the [MIT](https://github.com/Gherciu/commitlint-jira/blob/master/LICENSE) License.<br>
Authored and maintained by GHERCIU with help from contributors ([list](https://github.com/Gherciu/commitlint-jira/contributors)).

#### If you like this repository star⭐ and watch👀 on [GitHub](https://github.com/Gherciu/commitlint-jira)
