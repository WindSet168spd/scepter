import { Injectable } from "@nestjs/common";
import { Effect } from "effect";
import { User } from "@scepter/domains";
import {
  FindHonkaiStarRailUserByUidError,
  OmitTimestamps,
} from "./honkai-star-rail-data-provider.types";

@Injectable()
export abstract class AbstractHonkaiStarRailDataProviderService {
  abstract findUserByUid(
    id: User["uid"],
  ): Effect.Effect<OmitTimestamps<User>, FindHonkaiStarRailUserByUidError>;
}
