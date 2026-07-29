import { AppError, type ErrorCode } from './base-error'

export class ApiError extends AppError {
  readonly code: ErrorCode = 'API_ERROR'
  readonly statusCode: number
  readonly endpoint: string
  readonly method: string

  constructor(
    message: string,
    options: {
      statusCode: number
      endpoint: string
      method: string
      cause?: Error
    },
  ) {
    super(message, {
      metadata: {
        endpoint: options.endpoint,
        method: options.method,
        statusCode: options.statusCode,
      },
      cause: options.cause,
    })
    this.statusCode = options.statusCode
    this.endpoint = options.endpoint
    this.method = options.method
  }
}
