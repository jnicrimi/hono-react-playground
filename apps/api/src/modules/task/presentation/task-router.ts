import { Hono } from "hono"
import type { CreateTaskUseCase } from "../application/create-task"
import { InvalidTaskTitleError } from "../domain/invalid-task-title-error"

type TaskRouterDeps = {
  createTask: CreateTaskUseCase
}

export const createTaskRouter = (deps: TaskRouterDeps) => {
  const router = new Hono()

  router.post("/", async (c) => {
    const body = await c.req
      .json<{ title?: unknown }>()
      .catch((): { title?: unknown } => ({}))
    if (typeof body.title !== "string") {
      return c.json({ error: "title is required" }, 400)
    }
    try {
      const created = await deps.createTask.execute({ title: body.title })
      return c.json(created, 201)
    } catch (e) {
      if (e instanceof InvalidTaskTitleError) {
        return c.json({ error: e.message }, 400)
      }
      throw e
    }
  })

  return router
}
