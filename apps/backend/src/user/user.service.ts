import { Injectable } from "@nestjs/common";
import { EnkaService } from "src/enka/enka.service";
import { AbstractUserRepository } from "src/user/infrastructure/persistance/abstract-repository/user.repository";

@Injectable()
export class UserService {
  constructor(
    private readonly enkaService: EnkaService,
    private readonly usersRepository: AbstractUserRepository,
  ) {}

  async findByUid(uid: number) {
    const localUserData = await this.usersRepository.findByUid(uid);

    if (localUserData) return localUserData;

    const starRailUserData = await this.enkaService.findUserByUid(uid);

    return await this.usersRepository.create({
      uid: starRailUserData.uid,
      achievementCount: starRailUserData.achievementCount,
      icon: starRailUserData.icon.icon.url,
      level: starRailUserData.level,
      nickname: starRailUserData.nickname,
      signature: starRailUserData.signature,
      characters: [],
    });
  }
}
