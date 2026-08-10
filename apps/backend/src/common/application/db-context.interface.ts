import { Effect } from "effect";
import { UnknownException } from "effect/Cause";

export interface IDbContext {
  startTransaction(): Effect.Effect<void, UnknownException>;

  commitTransaction(): Effect.Effect<void, UnknownException>;

  rollbackTransaction(): Effect.Effect<void, UnknownException>;
}
