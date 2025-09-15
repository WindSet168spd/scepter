import { HttpException, InternalServerErrorException } from "@nestjs/common";

export type BaseTaggedError = {
  cause: unknown;
  _tag: string;
};

export type Matcher<E extends BaseTaggedError> = {
  [P in E as P["_tag"]]: (args: P["cause"]) => HttpException;
};

export function matchError<E extends BaseTaggedError>(
  error: E,
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
