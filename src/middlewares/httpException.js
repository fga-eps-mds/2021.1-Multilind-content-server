import { HttpException } from "../error/HttpException";

export default function (error, request, response, next) {
  if (error instanceof HttpException) {
    return response.status(error.status || 406).json({ error: error.message });
  }
  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
  next();
}