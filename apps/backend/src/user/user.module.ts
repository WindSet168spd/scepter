import { Module } from "@nestjs/common";
import { UserController } from "src/user/user.controller";
import { UserService } from "src/user/user.service";
import { EnkaModule } from "src/enka/enka.module";

@Module({
  imports: [EnkaModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
