import { Inject } from "@nestjs/common";
import { BaseToken } from "../tokens";
import { IDbContext } from "./db-context.interface";
import { Effect, Exit } from "effect";

export abstract class Command<TInput = void, TOutput = void> {
  protected _input: TInput;

  @Inject(BaseToken.DB_CONTEXT)
  protected _dbContext: IDbContext;

  execute(input: TInput) {
    this._input = input;

    return Effect.acquireUseRelease(
      this._dbContext.startTransaction(),
      () => this.implementation(),
      (_, exit) =>
        Exit.isSuccess(exit)
          ? this._dbContext.commitTransaction().pipe(Effect.orDie)
          : this._dbContext.rollbackTransaction().pipe(Effect.orDie),
    );
  }

  protected abstract implementation(): Effect.Effect<TOutput, unknown>;
}
