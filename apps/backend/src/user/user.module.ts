import { Module } from "@nestjs/common";
import { UserController } from "./infrastructure/api/user.controller";
import { CommandToken } from "src/common/tokens";
import { CreateUserCommand } from "./application/commands/create-user/create-user";
import { HonkaiStarRailDataProviderModule } from "./infrastructure/services/honkai-star-rail-data-provider/honkai-star-rail-data-provider.module";

@Module({
  imports: [HonkaiStarRailDataProviderModule],
  controllers: [UserController],
  providers: [
    {
      provide: CommandToken.CREATE_USER,
      useClass: CreateUserCommand,
    },
  ],
})
export class UserModule {}
