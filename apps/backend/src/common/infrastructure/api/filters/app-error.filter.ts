import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { Cause } from "effect";
import { Response } from "express";
import { matchError } from "../errors/match-error";
import { errorMatcher } from "../errors/error-matcher";

@Catch()
export class AppErrorFilter implements ExceptionFilter {
  catch(error: unknown, _host: ArgumentsHost): void {
    if (!Cause.isCause(error)) {
      throw error;
    }

    matchError(error, errorMatcher);
  }
}
