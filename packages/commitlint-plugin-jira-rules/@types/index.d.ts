export type TRuleFuncReturn = (
  parsed: Partial<{
    type: string
    scope: string
    subject: string
    merge: string
    header: string
    body: string
    footer: string
    notes: string[]
    references: string[]
    mentions: string[]
    revert: string
    raw: string
  }>,
  when?: string,
  value?: string | number | (string | number)[],
) => (string | boolean)[]

export interface CommitlintPluginJira {
  rules: {
    [key: string]: TRuleFuncReturn | (number | string)[]
  }
}
declare const commitlintPluginJira: CommitlintPluginJira

export default commitlintPluginJira
