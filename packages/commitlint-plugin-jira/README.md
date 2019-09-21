<div align="center">
  <img width="300" height="200"
    src="https://raw.githubusercontent.com/Gherciu/commitlint-plugin-jira/master/logo.png">
  <h1>commitlint-plugin-jira</h1>
  <p>Shareable commitlint config enforcing Jira commits messages style</p>
</div>

![GitHub](https://img.shields.io/github/license/Gherciu/commitlint-plugin-jira)

## Getting started.

##### Install dependencies

```bash
npm install --save-dev @commitlint/cli commitlint-plugin-jira
```

##### Configure commitlint to use jira commits messages style config

```js
// commitlint.config.js
module.exports = {
  plugins: ['commitlint-plugin-jira'],
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

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**[@Gherciu/commitlint-plugin-jira](https://github.com/Gherciu/commitlint-plugin-jira)** © [GHERCIU](https://github.com/Gherciu), Released under the [MIT](https://github.com/Gherciu/commitlint-plugin-jira/blob/master/LICENSE) License.<br>
Authored and maintained by GHERCIU with help from contributors ([list](https://github.com/Gherciu/commitlint-plugin-jira/contributors)).

#### If you like this repository star⭐ and watch👀 on [GitHub](https://github.com/Gherciu/commitlint-plugin-jira)
