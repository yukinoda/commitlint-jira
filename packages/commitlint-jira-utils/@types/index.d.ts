export interface Rules {
  taskIdMaxLength: string
  taskIdMinLength: string
}

export interface TCommitlintJiraConstants {
  JIRA_RULES: Rules
  COMMIT_MESSAGE_SEPARATOR: string
  COMMIT_TASK_IDS_SEPARATOR: string
}

export type TParseCommitMessage = (
  commitMessage: string,
) => {
  taskIds: string[]
  messageBody: string
}

export interface CommitlintJiraUtils {
  parseCommitMessage: TParseCommitMessage
  commitlintJiraConstants: TCommitlintJiraConstants
}

export const commitlintJiraConstants: TCommitlintJiraConstants
export const parseCommitMessage: TParseCommitMessage

declare const commitlintJiraUtils: CommitlintJiraUtils
export default commitlintJiraUtils
