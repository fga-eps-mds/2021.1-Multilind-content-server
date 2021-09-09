export class HttpException extends Error {
  constructor(status = 400, message) {
    super(message);
    this.status = status;
    this.message = message;
  }
}
