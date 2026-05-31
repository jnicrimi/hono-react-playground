import type { Task } from "../domain/task"
import type { TaskRepository } from "../domain/task-repository"

export class InMemoryTaskRepository implements TaskRepository {
  private readonly store = new Map<string, Task>()

  async save(task: Task): Promise<void> {
    this.store.set(task.id.value, task)
  }
}
