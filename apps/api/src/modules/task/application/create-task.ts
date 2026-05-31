import { Task } from "../domain/task"
import type { TaskRepository } from "../domain/task-repository"
import { TaskTitle } from "../domain/task-title"

export type CreateTaskCommand = { title: string }
export type CreateTaskResult = { id: string }

export class CreateTaskUseCase {
  constructor(private readonly repository: TaskRepository) {}

  async execute(command: CreateTaskCommand): Promise<CreateTaskResult> {
    const task = Task.create(TaskTitle.from(command.title))
    await this.repository.save(task)
    return { id: task.id.value }
  }
}
