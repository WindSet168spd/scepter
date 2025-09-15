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
import {
  StarRailUserDto,
  starRailUserSchema,
} from "src/honkai-star-rail-api/dto/star-rail-user.dto";
import { FindHonkaiStarRailUserByUidError } from "src/honkai-star-rail-api/honkai-star-rail-api.types";

@Injectable()
export class HonkaiStarRailApiService
  implements AbstractHonkaiStarRailApiService
{
  constructor(@Inject(ENKA) private readonly client: StarRail) {}

  findUserByUid(
    uid: number,
  ): ResultAsync<StarRailUserDto, FindHonkaiStarRailUserByUidError> {
    return ResultAsync.fromPromise(
      this.client.fetchUser(uid),
      () => new UnexpectedHonkaiStarRailApiError(),
    ).andThen(
      (
        starRailUser,
      ): Result<StarRailUserDto, FindHonkaiStarRailUserByUidError> => {
        if (!starRailUser) {
          return err(new HonkaiStarRailUserNotFoundError({ id: uid }));
        }
        const validatedStarRailUser =
          starRailUserSchema.safeParse(starRailUser);
        if (!validatedStarRailUser.success) {
          return err(new InvalidHonkaiStarRailUserError());
        }
        return ok(validatedStarRailUser.data);
      },
    );
  }
}
