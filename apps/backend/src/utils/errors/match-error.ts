import { HttpException, InternalServerErrorException } from "@nestjs/common";
import { AppError } from "./app-error";

export type BaseTaggedError = {
  cause: unknown;
  _tag: string;
};

export type Matcher<E extends BaseTaggedError> = {
  [P in E as P["_tag"]]: (args: P["cause"]) => HttpException;
};

export function matchError(error: AppError, matcher: Matcher<AppError>): void {
  const exception = matcher[error._tag]?.(error.cause);
  if (exception) {
    throw exception;
  }
  throw new InternalServerErrorException();
}
