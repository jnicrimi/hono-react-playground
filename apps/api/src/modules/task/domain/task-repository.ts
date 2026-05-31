import type { Task } from "./task"

export interface TaskRepository {
  save(task: Task): Promise<void>
}
