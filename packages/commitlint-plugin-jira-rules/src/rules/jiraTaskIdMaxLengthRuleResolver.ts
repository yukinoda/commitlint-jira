import { TRuleFuncReturn } from '../../@types'

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
export default jiraTaskIdMaxLengthRuleResolver
