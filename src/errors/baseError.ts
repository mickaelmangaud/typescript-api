export class BaseError extends Error {
  name: string;
  message: string;
  detailedMessages: any[];
  code: string;
  status: number;

  constructor(message: string, detailedMessages: any[], code: string, status: number) {
    super();
    this.name = 'Express error';
    this.message = message;
    this.detailedMessages = detailedMessages;
    this.code = code;
    this.status = status;

    Error.captureStackTrace(this, this.constructor);
  }
}
