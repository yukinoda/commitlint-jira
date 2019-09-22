import { CommitlintPluginJira, TRuleFuncReturn } from '../@types'

const jiraTaskIdMinLengthRuleResolver: TRuleFuncReturn = (
  parsed,
  _when,
  value = 4,
) => {
  const commitMessage = parsed.raw
  if (!commitMessage) return [false, 'Commit message should not be empty']

  const isRuleValid = commitMessage.split(':')[0].length < value
  return [!isRuleValid, `body must not be shorter than ${value} characters`]
}

const jiraTaskIdMaxLengthRuleResolver: TRuleFuncReturn = (
  parsed,
  _when,
  value = 8,
) => {
  const commitMessage = parsed.raw
  if (!commitMessage) return [false, 'Commit message should not be empty']

  const isRuleValid = commitMessage.split(':')[0].length > value
  return [!isRuleValid, `body must not be loonger than ${value} characters`]
}

export const commitlintPluginJira: CommitlintPluginJira = {
  rules: {
    'jira-task-id-min-length': jiraTaskIdMinLengthRuleResolver,
    'jira-task-id-max-length': jiraTaskIdMaxLengthRuleResolver,
  },
}

export default commitlintPluginJira
