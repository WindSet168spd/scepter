import { Controller, Get, HttpCode, HttpStatus, Param } from "@nestjs/common";
import { NullableType } from "@scepter/utilities";
import { User } from "src/user/domain/user";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get(":uid")
  @HttpCode(HttpStatus.OK)
  findOne(@Param("uid") id: User["uid"]): Promise<NullableType<unknown>> {
    return this.usersService.findByUid(id);
  }
}
