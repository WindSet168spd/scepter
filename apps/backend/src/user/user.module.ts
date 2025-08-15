import { Module } from "@nestjs/common";
import { UserController } from "src/user/user.controller";
import { UserService } from "src/user/user.service";
import { EnkaModule } from "src/enka/enka.module";
import { UserPersistenceModule } from "src/user/infrastructure/persistence/persistence.module";

@Module({
  imports: [EnkaModule, UserPersistenceModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
