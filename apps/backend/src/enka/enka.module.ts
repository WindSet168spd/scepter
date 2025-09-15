import { Module } from "@nestjs/common";
import { StarRail } from "starrail.js";

export const ENKA = Symbol("enka-api");

@Module({
  providers: [
    {
      provide: ENKA,
      useFactory: (): StarRail => {
        const enkaClient = new StarRail({
          showFetchCacheLog: true,
        });

        enkaClient.cachedAssetsManager.activateAutoCacheUpdater({
          instant: true,
          timeout: 60 * 60 * 1000,
        });

        return enkaClient;
      },
    },
  ],
  exports: [ENKA],
})
export class EnkaModule {}
