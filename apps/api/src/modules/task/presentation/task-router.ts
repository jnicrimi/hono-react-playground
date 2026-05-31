import { Hono } from "hono"
import type { CreateTaskUseCase } from "../application/create-task"

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
    const created = await deps.createTask.execute({ title: body.title })
    return c.json(created, 201)
  })

  return router
}
