import { Hono } from "hono"
import { CreateTaskUseCase } from "../../modules/task/application/create-task"
import { InMemoryTaskRepository } from "../../modules/task/infrastructure/in-memory-task-repository"
import { createTaskRouter } from "../../modules/task/presentation/task-router"

export const createApp = () => {
  const app = new Hono()

  const taskRepository = new InMemoryTaskRepository()
  const taskRouter = createTaskRouter({
    createTask: new CreateTaskUseCase(taskRepository),
  })
  app.route("/tasks", taskRouter)

  return app
}
