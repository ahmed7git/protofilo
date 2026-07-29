export type ErrorCode =
  | 'VALIDATION_ERROR'
  | 'API_ERROR'
  | 'AUTH_ERROR'
  | 'NOT_FOUND'
  | 'UNKNOWN_ERROR'
  | 'RATE_LIMIT_ERROR'
  | 'NETWORK_ERROR'

export abstract class AppError extends Error {
  abstract readonly code: ErrorCode
  abstract readonly statusCode: number
  readonly isOperational: boolean
  readonly timestamp: string
  readonly metadata: Record<string, unknown>

  constructor(
    message: string,
    options?: {
      isOperational?: boolean
      metadata?: Record<string, unknown>
      cause?: Error
    },
  ) {
    super(message, { cause: options?.cause })
    this.name = this.constructor.name
    this.isOperational = options?.isOperational ?? true
    this.timestamp = new Date().toISOString()
    this.metadata = options?.metadata ?? {}

    // Maintain proper stack trace
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    }
  }

  toJSON() {
    return {
      name: this.name,
      code: this.code,
      message: this.message,
      statusCode: this.statusCode,
      isOperational: this.isOperational,
      timestamp: this.timestamp,
      metadata: this.metadata,
      ...(process.env.NODE_ENV === 'development' && { stack: this.stack }),
    }
  }
}
