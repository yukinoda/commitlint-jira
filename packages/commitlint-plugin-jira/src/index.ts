import { CommitlintPluginJira, TRuleFuncReturn } from '../@types'

const jiraTaskIdMinLength: TRuleFuncReturn = (parsed, _when, value = 4) => {
  const commitMessage = parsed.raw
  if (!commitMessage) return [false, 'Commit message should not be empty']

  const isRuleValid = commitMessage.split(':')[0].length < value
  return [!isRuleValid, `body must not be shorter than ${value} characters`]
}

const jiraTaskIdMaxLength: TRuleFuncReturn = (parsed, _when, value = 8) => {
  const commitMessage = parsed.raw
  if (!commitMessage) return [false, 'Commit message should not be empty']

  const isRuleValid = commitMessage.split(':')[0].length > value
  return [!isRuleValid, `body must not be loonger than ${value} characters`]
}

export const commitlintPluginJira: CommitlintPluginJira = {
  rules: {
    'jira-task-id-min-length': jiraTaskIdMinLength,
    'jira-task-id-max-length': jiraTaskIdMaxLength,
  },
}

export default commitlintPluginJira
