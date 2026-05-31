import * as z from "zod"
import { TASK_TITLE_MAX_LENGTH } from "../domain/task-title"

export const createTaskSchema = z.object({
  title: z.string().trim().min(1).max(TASK_TITLE_MAX_LENGTH),
})
