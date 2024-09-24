import { ArgumentsHost, BadRequestException, Catch } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { captureException } from '@sentry/nestjs';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  catch(
    e: Error & {
      response?: { statusCode: number; message: Array<string>; error: string };
    } & any,
    host: ArgumentsHost,
  ) {
    const res = host.switchToHttp().getResponse();

    /* 
     Limit status codes to 200 and 204
     */
    if (res.statusCode != 200 || res.statusCode != 204) res.status(204);

    /*
     Message for users
     */
    if (e.message?.startsWith('EXC_'))
      return res.setHeader('EXC', e.message).end();

    // validator errors
    let unknownValidationErrorOccur = false;
    if (Array.isArray(e.response?.message) && e.response?.message.length > 0) {
      for (const msg of e.response.message) {
        if (!unknownValidationErrorOccur && !msg.startsWith('EXC_'))
          unknownValidationErrorOccur = true;
      }

      if (unknownValidationErrorOccur) {
        captureException(e);
        return res.setHeader('EXC', 'EXC_BAD_REQUEST').end();
      }

      return res
        .setHeader('EXC', Array.from(new Set(e.response.message)).join(','))
        .end();
    }

    /*
     Bad request exception
     */
    if (e instanceof BadRequestException) {
      captureException(e);
      return res.setHeader('EXC', 'EXC_BAD_REQUEST').end();
    }

    /*
     Unhandled errors
     */
    res.setHeader('EXC', 'EXC_UNKNOWN').end();
    captureException(e);
    super.catch(e, host);
  }
}
