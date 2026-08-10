import { InternalServerErrorException } from "@nestjs/common";
import { AppError } from "./app-error";
import { Matcher } from "./match-error";
import { HonkaiStarRailUserNotFoundException } from "src/user/infrastructure/services/honkai-star-rail-data-provider/honkai-star-rail-data-provider.exceptions";

export const errorMatcher: Matcher<AppError> = {
  InvalidHonkaiStarRailUserError: () => new InternalServerErrorException(),
  HonkaiStarRailUserNotFoundError: (args) =>
    new HonkaiStarRailUserNotFoundException(args.id),
  UnexpectedHonkaiStarRailApiError: () => new InternalServerErrorException(),
};
