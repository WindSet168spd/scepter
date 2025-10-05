import { Injectable } from "@nestjs/common";
import { ok } from "neverthrow";
import { OmitTimestamps } from "src/honkai-star-rail-api/honkai-star-rail-api.types";
import { AbstractHonkaiStarRailApiService } from "src/honkai-star-rail-api/service/honkai-star-rail-api.interface";
import { AbstractUserRepository } from "src/user/infrastructure/persistence/abstract-repository/user.repository";
import { User } from "@scepter/domains";

@Injectable()
export class UserService {
  constructor(
    private readonly usersRepository: AbstractUserRepository,
    private readonly honkaiStarRailApi: AbstractHonkaiStarRailApiService,
  ) {}

  findByUid(uid: number) {
    return this.honkaiStarRailApi
      .findUserByUid(uid)
      .andThen((user: OmitTimestamps<User>) => {
        return ok(user);
      });
  }
}
