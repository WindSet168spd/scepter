import { Injectable } from "@nestjs/common";
import { EnkaService } from "src/enka/enka.service";

@Injectable()
export class UserService {
  constructor(private readonly enkaService: EnkaService) {}

  async findByUid(uid: number) {
    const starRailUserData = await this.enkaService.findUserByUid(uid);

    console.log(starRailUserData);

    return true;
  }
}
