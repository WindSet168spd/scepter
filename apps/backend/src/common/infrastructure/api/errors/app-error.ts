import {
  HonkaiStarRailUserNotFoundError,
  InvalidHonkaiStarRailUserError,
  UnexpectedHonkaiStarRailApiError,
} from "src/user/infrastructure/services/honkai-star-rail-data-provider/honkai-star-rail-data-provider.errors";

export type AppError =
  | UnexpectedHonkaiStarRailApiError
  | HonkaiStarRailUserNotFoundError
  | InvalidHonkaiStarRailUserError;

export function isAppError(exception: unknown): exception is AppError {
  return (
    exception instanceof UnexpectedHonkaiStarRailApiError ||
    exception instanceof HonkaiStarRailUserNotFoundError ||
    exception instanceof InvalidHonkaiStarRailUserError
  );
}
