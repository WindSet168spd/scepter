import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Cause, Effect, Exit } from "effect";
import { from, Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { AppError } from "../errors/app-error";

@Injectable()
export class EffectInterceptor implements NestInterceptor {
  intercept(
    _: ExecutionContext,
    next: CallHandler<Effect.Effect<unknown, AppError>>,
  ): Observable<unknown> {
    return next
      .handle()
      .pipe(switchMap((effect) => from(this.runEffect(effect))));
  }

  private async runEffect<E>(
    effect: Effect.Effect<unknown, E>,
  ): Promise<unknown> {
    const exit = await Effect.runPromiseExit(effect);

    if (Exit.isSuccess(exit)) {
      return exit.value;
    }

    throw Cause.squash(exit.cause);
  }
}
