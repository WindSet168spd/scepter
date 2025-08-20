import { Module } from "@nestjs/common";
import { EnkaService } from "src/enka/enka.service";
import { StarRailModule } from "src/star-rail/star-rail.module";

@Module({
  imports: [StarRailModule],
  providers: [EnkaService],
  exports: [EnkaService],
})
export class EnkaModule {}
