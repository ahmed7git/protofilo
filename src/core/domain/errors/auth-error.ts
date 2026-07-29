import { AppError, type ErrorCode } from './base-error'

export class AuthError extends AppError {
  readonly code: ErrorCode = 'AUTH_ERROR'
  readonly statusCode = 401

  constructor(message = 'Authentication required', options?: { cause?: Error }) {
    super(message, options)
  }
}
