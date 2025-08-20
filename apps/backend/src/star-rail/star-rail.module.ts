import { Module } from "@nestjs/common";
import { StarRail } from "starrail.js";

export const STARRAIL = Symbol("star-rail-client");

@Module({
  providers: [
    {
      provide: STARRAIL,
      useFactory: (): StarRail => {
        return new StarRail();
      },
    },
  ],
  exports: [STARRAIL],
})
export class StarRailModule {}
