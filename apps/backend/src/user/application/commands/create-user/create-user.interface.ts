import { Effect } from "effect";
import { FullUserInfoDto } from "src/user/domain/dtos/full-user-info.dto";

export interface ICreateUserCommand {
  execute(uid: number): Effect.Effect<FullUserInfoDto, unknown>;
}
