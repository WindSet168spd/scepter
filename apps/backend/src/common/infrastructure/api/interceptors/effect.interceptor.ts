import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Cause, Effect, Exit } from "effect";
import { from, Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";

@Injectable()
export class EffectInterceptor implements NestInterceptor {
  intercept(
    _: ExecutionContext,
    next: CallHandler<unknown>,
  ): Observable<unknown> {
    return next
      .handle()
      .pipe(
        switchMap((value) =>
          Effect.isEffect(value)
            ? from(this.runEffect(value as Effect.Effect<unknown, unknown>))
            : of(value),
        ),
      );
  }

  private async runEffect(
    effect: Effect.Effect<unknown, unknown>,
  ): Promise<unknown> {
    const exit = await Effect.runPromiseExit(effect);

    if (Exit.isSuccess(exit)) {
      return exit.value;
    }

    throw Cause.squash(exit.cause);
  }
}
