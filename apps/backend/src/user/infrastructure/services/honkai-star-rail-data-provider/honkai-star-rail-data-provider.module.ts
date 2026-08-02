import { Module } from "@nestjs/common";
import { EnkaModule } from "./enka.module";
import { IHonkaiStarRailDataProvider } from "src/user/application/services/honkai-star-rail-data.service";
import { HonkaiStarRailDataProvider } from "./honkai-star-rail-data-provider.service";

@Module({
  imports: [EnkaModule],
  providers: [
    {
      provide: IHonkaiStarRailDataProvider,
      useClass: HonkaiStarRailDataProvider,
    },
  ],
  exports: [IHonkaiStarRailDataProvider],
})
export class HonkaiStarRailDataProviderModule {}
