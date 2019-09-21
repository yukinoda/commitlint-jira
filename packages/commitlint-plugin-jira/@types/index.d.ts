export type TRuleReturn = (string | number | (string | number)[])[]

export type TRuleFuncReturn = () => Promise<TRuleReturn>

export interface CommitLintJira {
  rules: {
    [key: string]: TRuleReturn | TRuleFuncReturn
  }
}
declare const commitLintJira: CommitLintJira

export default commitLintJira
