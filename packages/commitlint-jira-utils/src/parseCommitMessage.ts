import { TParseCommitMessage } from '../@types'
import {
  COMMIT_MESSAGE_SEPARATOR,
  COMMIT_TASK_IDS_SEPARATOR,
} from './commitlintJiraConstants'

const parseCommitMessage: TParseCommitMessage = commitMessage => {
  const [parsedTaskIds, messageBody] = commitMessage.split(
    COMMIT_MESSAGE_SEPARATOR,
  )

  return {
    taskIds: parsedTaskIds
      .split(COMMIT_TASK_IDS_SEPARATOR)
      .map(taskId => taskId.trim()),
    messageBody: messageBody.trim(),
  }
}

export default parseCommitMessage
