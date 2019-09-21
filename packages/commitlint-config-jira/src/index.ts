import { CommitLintJira } from '../@types'

export const commitLintJira: CommitLintJira = {
  rules: {
    'header-max-length': [2, 'always', 72],
  },
}

export default commitLintJira
