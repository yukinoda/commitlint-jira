export interface Rules {
  taskIdMaxLength: string
  taskIdMinLength: string
}

export interface TCommitlintJiraConstants {
  JIRA_RULES: Rules
}

export interface CommitlintJiraUtils {
  commitlintJiraConstants: TCommitlintJiraConstants
}

export const commitlintJiraConstants: TCommitlintJiraConstants
declare const commitlintJiraUtils: CommitlintJiraUtils

export default commitlintJiraUtils
