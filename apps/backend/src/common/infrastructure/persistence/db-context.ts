import { Inject, Injectable, Scope } from "@nestjs/common";
import { Effect } from "effect";
import { UnknownException } from "effect/Cause";
import { IDbContext } from "src/common/application/db-context.interface";
import { BaseToken } from "src/common/tokens";
import {
  DataSource,
  EntityManager,
  EntityTarget,
  ObjectLiteral,
} from "typeorm";

@Injectable({ scope: Scope.REQUEST })
export class DbContext implements IDbContext {
  private _manager: EntityManager;

  // private _userRepository: IUserRepository;

  constructor(
    @Inject(BaseToken.DATA_SOURCE) private readonly dataSource: DataSource,
  ) {
    this._manager = dataSource.manager;

    this.initRepositories();
  }

  private getRepository<
    TEntity extends EntityTarget<ObjectLiteral>,
    TRepository,
  >(ctor: new (...args: any[]) => TRepository, entity: TEntity): TRepository {
    return new ctor(this._manager.getRepository(entity), this.dataSource);
  }

  private initRepositories(): void {
    // this._userRepository = this.getRepository(
    //   CinemaHallRepository,
    //   CinemaHallEntity,
    // );
  }

  // get userRepository(): IUserRepository {
  //   return this._userRepository;
  // }

  startTransaction() {
    return Effect.gen(this, function* () {
      this._manager = this.dataSource.createQueryRunner().manager;

      this.initRepositories();

      yield* Effect.tryPromise(() =>
        this._manager.queryRunner!.startTransaction(),
      );
    });
  }

  commitTransaction() {
    return Effect.gen(this, function* () {
      const qr = this._manager.queryRunner;

      if (!qr) {
        return yield* Effect.fail(
          new UnknownException("QueryRunner is not initialized"),
        );
      }

      yield* Effect.tryPromise(() => qr.commitTransaction());
      yield* Effect.tryPromise(() => qr.release());
    });
  }

  rollbackTransaction() {
    return Effect.gen(this, function* () {
      const qr = this._manager.queryRunner;

      if (!qr) {
        return yield* Effect.fail(
          new UnknownException("QueryRunner is not initialized"),
        );
      }

      yield* Effect.tryPromise(() => qr.rollbackTransaction());
      yield* Effect.tryPromise(() => qr.release());
    });
  }
}
