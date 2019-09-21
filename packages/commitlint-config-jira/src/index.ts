import { CommitlintConfigJira } from '../@types'

export const commitlintConfigJira: CommitlintConfigJira = {
  rules: {
    'header-max-length': [2, 'always', 72],
    'jira-task-id-min-length': [2, 'always', 4],
    'jira-task-id-max-length': [2, 'always', 8],
  },
}

export default commitlintConfigJira
