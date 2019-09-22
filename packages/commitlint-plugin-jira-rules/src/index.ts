import { commitlintJiraConstants } from 'commitlint-jira-utils'
import { CommitlintPluginJira } from '../@types'
import jiraTaskIdMaxLengthRuleResolver from './rules/jiraTaskIdMaxLengthRuleResolver'
import jiraTaskIdMinLengthRuleResolver from './rules/jiraTaskIdMinLengthRuleResolver'
import jiraTaskIdEmptyRuleResolver from './rules/jiraTaskIdEmptyRuleResolver'

export const commitlintPluginJira: CommitlintPluginJira = {
  rules: {
    [commitlintJiraConstants.JIRA_RULES
      .taskIdEmpty]: jiraTaskIdEmptyRuleResolver,
    [commitlintJiraConstants.JIRA_RULES
      .taskIdMinLength]: jiraTaskIdMinLengthRuleResolver,
    [commitlintJiraConstants.JIRA_RULES
      .taskIdMaxLength]: jiraTaskIdMaxLengthRuleResolver,
    // [commitlintJiraConstants.JIRA_RULES.taskIdSeparator]: [
    //   2,
    //   'always',
    //   commitlintJiraConstants.TASK_ID_SEPARATOR,
    // ],
    // [commitlintJiraConstants.JIRA_RULES.taskIdCase]: [2, 'always', 'uppercase'],
    // [commitlintJiraConstants.JIRA_RULES.commitStatusCase]: [
    //   2,
    //   'always',
    //   'uppercase',
    // ],
  },
}

export default commitlintPluginJira
