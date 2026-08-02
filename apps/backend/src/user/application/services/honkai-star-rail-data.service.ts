import { Effect } from "effect";
import { UserAggregateDto } from "src/user/infrastructure/services/honkai-star-rail-data-provider/dto/user-aggregate.dto";
import { FindHonkaiStarRailUserByUidError } from "src/user/infrastructure/services/honkai-star-rail-data-provider/honkai-star-rail-data-provider.types";

export abstract class IHonkaiStarRailDataProvider {
  abstract getUserInformation(
    uid: number,
  ): Effect.Effect<UserAggregateDto, FindHonkaiStarRailUserByUidError>;
}
