import {
  HonkaiStarRailUserNotFoundError,
  InvalidHonkaiStarRailUserError,
  UnexpectedHonkaiStarRailApiError,
} from "src/honkai-star-rail-api/honkai-star-rail-api.errors";

export type AppError =
  | UnexpectedHonkaiStarRailApiError
  | HonkaiStarRailUserNotFoundError
  | InvalidHonkaiStarRailUserError;
