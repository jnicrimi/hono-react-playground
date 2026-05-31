import { zValidator } from "@hono/zod-validator"
import { Hono } from "hono"
import type { CreateTaskUseCase } from "../application/create-task"
import { createTaskSchema } from "./create-task-schema"

type TaskRouterDeps = {
  createTask: CreateTaskUseCase
}

export const createTaskRouter = (deps: TaskRouterDeps) => {
  const router = new Hono()

  router.post(
    "/",
    zValidator("json", createTaskSchema, (result, c) => {
      if (!result.success) {
        const message = result.error.issues[0]?.message ?? "invalid request"
        return c.json({ error: message }, 400)
      }
    }),
    async (c) => {
      const { title } = c.req.valid("json")
      const created = await deps.createTask.execute({ title })
      return c.json(created, 201)
    },
  )

  return router
}
