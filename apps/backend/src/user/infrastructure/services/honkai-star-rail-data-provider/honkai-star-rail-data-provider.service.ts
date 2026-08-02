import { Inject, Injectable } from "@nestjs/common";
import { IHonkaiStarRailDataProvider } from "src/user/application/services/honkai-star-rail-data.service";
import { ENKA } from "./enka.module";
import { StarRail } from "starrail.js";
import { Effect } from "effect";
import { starRailUserSchema } from "./dto/star-rail-user.dto";
import { HonkaiStarRailApiMapper } from "./mappers/honkai-star-rail-api.mapper";
import {
  HonkaiStarRailUserNotFoundError,
  InvalidHonkaiStarRailUserError,
  UnexpectedHonkaiStarRailApiError,
} from "./honkai-star-rail-data-provider.errors";
import { FindHonkaiStarRailUserByUidError } from "./honkai-star-rail-data-provider.types";
import { UserAggregateDto } from "./dto/user-aggregate.dto";

@Injectable()
export class HonkaiStarRailDataProvider implements IHonkaiStarRailDataProvider {
  constructor(@Inject(ENKA) private readonly client: StarRail) {}

  public getUserInformation(uid: number) {
    return Effect.tryPromise({
      try: () => this.client.fetchUser(uid),
      catch: () => new UnexpectedHonkaiStarRailApiError(),
    }).pipe(
      Effect.flatMap(
        (
          starRailUser,
        ): Effect.Effect<
          UserAggregateDto,
          FindHonkaiStarRailUserByUidError
        > => {
          if (!starRailUser) {
            return Effect.fail(
              new HonkaiStarRailUserNotFoundError({ id: uid }),
            );
          }

          const parsed = starRailUserSchema.safeParse(starRailUser);

          if (!parsed.success) {
            return Effect.fail(new InvalidHonkaiStarRailUserError());
          }

          return Effect.succeed(
            HonkaiStarRailApiMapper.toDomainUser(parsed.data),
          );
        },
      ),
    );
  }
}
