import { Injectable } from "@nestjs/common";
import { ResultAsync } from "neverthrow";
import { User } from "src/user/domain/user";
import {
  FindHonkaiStarRailUserByUidError,
  OmitTimestamps,
} from "src/honkai-star-rail-api/honkai-star-rail-api.types";

@Injectable()
export abstract class AbstractHonkaiStarRailApiService {
  abstract findUserByUid(
    id: User["uid"],
  ): ResultAsync<OmitTimestamps<User>, FindHonkaiStarRailUserByUidError>;
}
