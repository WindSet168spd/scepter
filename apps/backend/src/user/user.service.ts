import { Injectable } from "@nestjs/common";
import { AbstractHonkaiStarRailApiService } from "src/honkai-star-rail-api/service/honkai-star-rail-api.interface";
import { AbstractUserRepository } from "src/user/infrastructure/persistence/abstract-repository/user.repository";

@Injectable()
export class UserService {
  constructor(
    private readonly usersRepository: AbstractUserRepository,
    private readonly honkaiStarRailApi: AbstractHonkaiStarRailApiService,
  ) {}

  async findByUid(uid: number) {
    // const localUserData = await this.usersRepository.findByUid(uid);

    // if (localUserData) return localUserData;

    const starRailUserResult = await this.honkaiStarRailApi.findUserByUid(uid);

    if (starRailUserResult.isOk()) {
      console.dir(
        starRailUserResult.value.starfaringCompanions[1].skillTreeNodes,
      );
    }

    return true;
    // return await this.usersRepository.create({
    //   uid: starRailUserData.uid,
    //   achievementCount: starRailUserData.achievementCount,
    //   icon: starRailUserData.icon.icon.url,
    //   level: starRailUserData.level,
    //   nickname: starRailUserData.nickname,
    //   signature: starRailUserData.signature,
    // });
  }
}
