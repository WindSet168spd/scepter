import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
} from "@nestjs/common";
import { Effect } from "effect";
import { CommandToken } from "src/common/tokens";
import { ICreateUserCommand } from "src/user/application/commands/create-user/create-user.interface";
import { FullUserInfoDto } from "src/user/domain/dtos/full-user-info.dto";

@Controller("user")
export class UserController {
  constructor(
    @Inject(CommandToken.CREATE_USER)
    private readonly createUserCommand: ICreateUserCommand,
  ) {}

  @Get(":uid")
  @HttpCode(HttpStatus.OK)
  findOne(
    @Param("uid", ParseIntPipe) uid: number,
  ): Effect.Effect<FullUserInfoDto, unknown> {
    return this.createUserCommand.execute(uid);
  }
}
