import { Inject, Injectable } from "@nestjs/common";
import { StarRail } from "starrail.js";
import { AbstractHonkaiStarRailApiService } from "src/honkai-star-rail-api/abstract-service/honkai-star-rail-api.service";
import { ENKA } from "src/enka/enka.module";

@Injectable()
export class HonkaiStarRailApiService
  implements AbstractHonkaiStarRailApiService
{
  constructor(@Inject(ENKA) private readonly client: StarRail) {}

  async findUserByUid(uid: number) {
    return this.client.fetchUser(uid);
  }
}
