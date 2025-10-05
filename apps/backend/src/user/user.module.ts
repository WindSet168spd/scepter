import { Module } from "@nestjs/common";
import { UserController } from "src/user/user.controller";
import { UserService } from "src/user/user.service";
import { UserPersistenceModule } from "src/user/infrastructure/persistence/persistence.module";
import { HonkaiStarRailApiModule } from "src/honkai-star-rail-api/honkai-star-rail-api.module";

@Module({
  imports: [HonkaiStarRailApiModule, UserPersistenceModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
