import { TaggedError } from "src/utils/errors/tagged-error";

export class UnexpectedHonkaiStarRailApiError extends TaggedError(
  "UnexpectedHonkaiStarRailApiError",
) {}

export class HonkaiStarRailUserNotFoundError extends TaggedError(
  "HonkaiStarRailUserNotFoundError",
)<{
  id: number;
}> {}

export class InvalidHonkaiStarRailUserError extends TaggedError(
  "InvalidHonkaiStarRailUserError",
) {}
