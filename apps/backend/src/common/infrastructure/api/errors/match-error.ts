import { HttpException, InternalServerErrorException } from "@nestjs/common";
import { Cause } from "effect";

export type BaseTaggedError = {
  _tag: string;
};

export type Matcher<E extends BaseTaggedError> = {
  [P in E as P["_tag"]]: (args: P) => HttpException;
};

export function matchError<E extends BaseTaggedError>(
  error: Cause.Cause<unknown>,
  matcher: Matcher<E>,
): void {
  // @ts-expect-error this is safe
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const exception = matcher[error._tag]?.(error.cause);
  if (exception) {
    throw exception;
  }
  throw new InternalServerErrorException();
}
