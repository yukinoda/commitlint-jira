import { CommitlintPluginJira, TRuleFuncReturn } from '../@types'

const test: TRuleFuncReturn = () => {
  throw Error('aaa')
}

export const commitlintPluginJira: CommitlintPluginJira = {
  rules: {
    test,
  },
}

export default commitlintPluginJira
