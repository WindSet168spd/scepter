import {
  HonkaiStarRailUserNotFoundError,
  InvalidHonkaiStarRailUserError,
  UnexpectedHonkaiStarRailApiError,
} from "./honkai-star-rail-data-provider.errors";

export type FindHonkaiStarRailUserByUidError =
  | UnexpectedHonkaiStarRailApiError
  | HonkaiStarRailUserNotFoundError
  | InvalidHonkaiStarRailUserError;

export type OmitTimestamps<T> = T extends (infer U)[]
  ? OmitTimestamps<U>[]
  : T extends object
    ? {
        [K in keyof T as K extends "createdAt" | "updatedAt"
          ? never
          : K]: OmitTimestamps<T[K]>;
      }
    : T;
