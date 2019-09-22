import { CommitlintPluginJira } from '../@types'
import jiraTaskIdMaxLengthRuleResolver from './rules/jiraTaskIdMaxLengthRuleResolver'
import jiraTaskIdMinLengthRuleResolver from './rules/jiraTaskIdMinLengthRuleResolver'

export const commitlintPluginJira: CommitlintPluginJira = {
  rules: {
    'jira-task-id-min-length': jiraTaskIdMinLengthRuleResolver,
    'jira-task-id-max-length': jiraTaskIdMaxLengthRuleResolver,
  },
}

export default commitlintPluginJira
