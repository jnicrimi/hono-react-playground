import { InvalidTaskTitleError } from "./invalid-task-title-error"

export const TASK_TITLE_MAX_LENGTH = 100

export class TaskTitle {
  private constructor(readonly value: string) {}

  static from(value: string): TaskTitle {
    const trimmed = value.trim()
    if (trimmed.length === 0) {
      throw new InvalidTaskTitleError("title must not be empty")
    }
    if (trimmed.length > TASK_TITLE_MAX_LENGTH) {
      throw new InvalidTaskTitleError(
        `title must be ${TASK_TITLE_MAX_LENGTH} characters or less`,
      )
    }
    return new TaskTitle(trimmed)
  }
}
