import {
  HonkaiStarRailUserNotFoundError,
  InvalidHonkaiStarRailUserError,
  UnexpectedHonkaiStarRailApiError,
} from "src/honkai-star-rail-api/honkai-star-rail-api.errors";

export type FindHonkaiStarRailUserByUidError =
  | UnexpectedHonkaiStarRailApiError
  | HonkaiStarRailUserNotFoundError
  | InvalidHonkaiStarRailUserError;
