import { TaskId } from "./task-id"
import type { TaskTitle } from "./task-title"

export class Task {
  private constructor(
    readonly id: TaskId,
    readonly title: TaskTitle,
    readonly completed: boolean,
  ) {}

  static create(title: TaskTitle): Task {
    return new Task(TaskId.generate(), title, false)
  }
}
