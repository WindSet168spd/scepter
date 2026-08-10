import { Data } from "effect";

export class UnexpectedHonkaiStarRailApiError extends Data.TaggedError(
  "UnexpectedHonkaiStarRailApiError",
) {}

export class HonkaiStarRailUserNotFoundError extends Data.TaggedError(
  "HonkaiStarRailUserNotFoundError",
)<{
  id: number;
}> {}

export class InvalidHonkaiStarRailUserError extends Data.TaggedError(
  "InvalidHonkaiStarRailUserError",
) {}
