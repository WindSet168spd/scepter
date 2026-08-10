import { Inject } from "@nestjs/common";
import { Effect } from "effect";
import { BaseToken } from "../tokens";
import { IDbContext } from "./db-context.interface";

export abstract class Query<TInput, TOutput, TError = never> {
  protected _input!: TInput;

  @Inject(BaseToken.DB_CONTEXT)
  protected _dbContext!: IDbContext;

  execute(input: TInput): Effect.Effect<TOutput, TError> {
    this._input = input;

    return this.implementation();
  }

  protected abstract implementation(): Effect.Effect<TOutput, TError>;
}
