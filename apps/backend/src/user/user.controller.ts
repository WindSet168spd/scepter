import { Controller, Get, HttpCode, HttpStatus, Param } from "@nestjs/common";
import { User } from "src/user/domain/user";
import { UserService } from "src/user/user.service";

@Controller("user")
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get(":uid")
  @HttpCode(HttpStatus.OK)
  findOne(@Param("uid") id: User["uid"]) {
    return this.usersService.findByUid(id);
  }
}
