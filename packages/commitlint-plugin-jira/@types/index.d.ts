export type TRuleFuncReturn = () => void

export interface CommitlintPluginJira {
  rules: {
    [key: string]: TRuleFuncReturn | (number | string)[]
  }
}
declare const commitlintPluginJira: CommitlintPluginJira

export default commitlintPluginJira
