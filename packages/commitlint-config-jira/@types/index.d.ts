export interface CommitlintConfigJira {
  rules: {
    [key: string]: (number | string)[]
  }
}
declare const commitlintConfigJira: CommitlintConfigJira

export default commitlintConfigJira
