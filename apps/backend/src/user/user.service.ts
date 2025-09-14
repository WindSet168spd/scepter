import { Injectable } from "@nestjs/common";
import { err, ok } from "neverthrow";
import { StarRailUserDto } from "src/honkai-star-rail-api/dto/star-rail-user.dto";
import { AbstractHonkaiStarRailApiService } from "src/honkai-star-rail-api/service/honkai-star-rail-api.interface";
import { AbstractUserRepository } from "src/user/infrastructure/persistence/abstract-repository/user.repository";

@Injectable()
export class UserService {
  constructor(
    private readonly usersRepository: AbstractUserRepository,
    private readonly honkaiStarRailApi: AbstractHonkaiStarRailApiService,
  ) {}

  findByUid(uid: number) {
    return this.honkaiStarRailApi
      .findUserByUid(uid)
      .andThen((starRailUserDto: StarRailUserDto) => {
        return err(new Error("fuck"));
        console.dir(starRailUserDto);
        return ok(true);
      });
  }
}
