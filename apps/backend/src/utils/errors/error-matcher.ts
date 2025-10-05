import { InternalServerErrorException } from "@nestjs/common";
import { HonkaiStarRailUserNotFoundException } from "src/honkai-star-rail-api/honkai-star-rail-api.exceptions";
import { AppError } from "src/utils/errors/app-error";
import { Matcher } from "src/utils/errors/match-error";

export const errorMatcher: Matcher<AppError> = {
  InvalidHonkaiStarRailUserError: () => new InternalServerErrorException(),
  HonkaiStarRailUserNotFoundError: (cause) =>
    new HonkaiStarRailUserNotFoundException(cause.id),
  UnexpectedHonkaiStarRailApiError: () => new InternalServerErrorException(),
};
