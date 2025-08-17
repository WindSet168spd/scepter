import { Module } from "@nestjs/common";
import { HonkaiStarRailApiService } from "src/honkai-star-rail-api/service/honkai-star-rail-api.service";
import { AbstractHonkaiStarRailApiService } from "src/honkai-star-rail-api/abstract-service/honkai-star-rail-api.service";
import { EnkaModule } from "src/enka/enka.module";

@Module({
  imports: [EnkaModule],
  providers: [
    {
      provide: AbstractHonkaiStarRailApiService,
      useClass: HonkaiStarRailApiService,
    },
  ],
  exports: [AbstractHonkaiStarRailApiService],
})
export class HonkaiStarRailApiModule {}
