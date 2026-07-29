import { AppError, type ErrorCode } from './base-error'

export class ValidationError extends AppError {
  readonly code: ErrorCode = 'VALIDATION_ERROR'
  readonly statusCode = 400
  readonly fieldErrors: Record<string, string[]>

  constructor(
    message: string,
    fieldErrors: Record<string, string[]> = {},
    options?: { cause?: Error },
  ) {
    super(message, { metadata: { fieldErrors }, ...options })
    this.fieldErrors = fieldErrors
  }
}
