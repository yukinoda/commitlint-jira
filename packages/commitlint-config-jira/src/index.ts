import { commitlintJiraConstants } from 'commitlint-jira-utils'
import { CommitlintConfigJira } from '../@types'

export const commitlintConfigJira: CommitlintConfigJira = {
  rules: {
    'header-max-length': [2, 'always', 72],
    [commitlintJiraConstants.JIRA_RULES.taskIdMinLength]: [2, 'always', 3],
    [commitlintJiraConstants.JIRA_RULES.taskIdMaxLength]: [2, 'always', 9],
    [commitlintJiraConstants.JIRA_RULES.taskIdSeparator]: [
      2,
      'always',
      commitlintJiraConstants.TASK_ID_SEPARATOR,
    ],
    [commitlintJiraConstants.JIRA_RULES.taskIdEmpty]: [2, 'always'],
    [commitlintJiraConstants.JIRA_RULES.taskIdCase]: [2, 'always', 'uppercase'],
    [commitlintJiraConstants.JIRA_RULES.commitStatusCase]: [
      2,
      'always',
      'uppercase',
    ],
  },
}

export default commitlintConfigJira
