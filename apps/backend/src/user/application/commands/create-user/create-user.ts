import { Injectable, Scope } from "@nestjs/common";
import { Command } from "src/common/application/command";
import { ICreateUserCommand } from "./create-user.interface";
import { Effect } from "effect";
import { IHonkaiStarRailDataProvider } from "src/user/application/services/honkai-star-rail-data.service";
import { FullUserInfoDto } from "src/user/domain/dtos/full-user-info.dto";
import { CreateUserMapper } from "./create-user.mapper";

@Injectable({ scope: Scope.REQUEST })
export class CreateUserCommand
  extends Command<number, FullUserInfoDto>
  implements ICreateUserCommand
{
  constructor(
    private readonly honkaiStarRailDataProvider: IHonkaiStarRailDataProvider,
  ) {
    super();
  }

  protected implementation() {
    return this.honkaiStarRailDataProvider
      .getUserInformation(this._input)
      .pipe(
        Effect.map((userAggregate) =>
          CreateUserMapper.toFullUserInfo(userAggregate),
        ),
      );
  }
}
