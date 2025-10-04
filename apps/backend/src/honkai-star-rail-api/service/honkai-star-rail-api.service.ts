import { Inject, Injectable } from "@nestjs/common";
import { StarRail } from "starrail.js";
import { AbstractHonkaiStarRailApiService } from "src/honkai-star-rail-api/service/honkai-star-rail-api.interface";
import { ENKA } from "src/enka/enka.module";
import { ResultAsync, Result, err, ok } from "neverthrow";
import {
  HonkaiStarRailUserNotFoundError,
  InvalidHonkaiStarRailUserError,
  UnexpectedHonkaiStarRailApiError,
} from "src/honkai-star-rail-api/honkai-star-rail-api.errors";
import { starRailUserSchema } from "src/honkai-star-rail-api/dto/star-rail-user.dto";
import {
  FindHonkaiStarRailUserByUidError,
  OmitTimestamps,
} from "src/honkai-star-rail-api/honkai-star-rail-api.types";
import { HonkaiStarRailApiMapper } from "../mappers/honkai-star-rail-api.mapper";
import { User } from "src/user/domain/user";

@Injectable()
export class HonkaiStarRailApiService
  implements AbstractHonkaiStarRailApiService
{
  constructor(@Inject(ENKA) private readonly client: StarRail) {}

  findUserByUid(
    uid: number,
  ): ResultAsync<OmitTimestamps<User>, FindHonkaiStarRailUserByUidError> {
    return ResultAsync.fromPromise(
      this.client.fetchUser(uid),
      () => new UnexpectedHonkaiStarRailApiError(),
    ).andThen(
      (
        starRailUser,
      ): Result<OmitTimestamps<User>, FindHonkaiStarRailUserByUidError> => {
        if (!starRailUser) {
          return err(new HonkaiStarRailUserNotFoundError({ id: uid }));
        }
        const validatedStarRailUser =
          starRailUserSchema.safeParse(starRailUser);
        if (!validatedStarRailUser.success) {
          return err(new InvalidHonkaiStarRailUserError());
        }

        const domainStarRailUser = HonkaiStarRailApiMapper.toDomainUser(
          validatedStarRailUser.data,
        );
        return ok(domainStarRailUser);
      },
    );
  }
}
