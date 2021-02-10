import { BaseError } from './baseError';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';

export class NotFoundError extends BaseError {
  constructor(message: string, detailedMessages: any[] = [], code = ReasonPhrases.NOT_FOUND, status = StatusCodes.NOT_FOUND) {
    super(message, detailedMessages, code, status);
  }
}
