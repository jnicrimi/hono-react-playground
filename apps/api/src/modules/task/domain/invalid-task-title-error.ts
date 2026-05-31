export class InvalidTaskTitleError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "InvalidTaskTitleError"
  }
}
