export class TaskTitle {
  private constructor(readonly value: string) {}

  static from(value: string): TaskTitle {
    return new TaskTitle(value)
  }
}
