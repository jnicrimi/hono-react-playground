import { randomUUID } from "node:crypto"

export class TaskId {
  private constructor(readonly value: string) {}

  static generate(): TaskId {
    return new TaskId(randomUUID())
  }
}
