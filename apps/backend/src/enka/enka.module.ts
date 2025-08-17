import { Module } from "@nestjs/common";
import { StarRail } from "starrail.js";

export const ENKA = Symbol("enka-api");

@Module({
  providers: [
    {
      provide: ENKA,
      useFactory: (): StarRail => {
        return new StarRail();
      },
    },
  ],
  exports: [ENKA],
})
export class EnkaModule {}
