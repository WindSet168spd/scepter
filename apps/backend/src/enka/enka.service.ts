import { Inject, Injectable } from "@nestjs/common";
import { STARRAIL } from "src/star-rail/star-rail.module";
import { StarRail } from "starrail.js";

@Injectable()
export class EnkaService {
  constructor(@Inject(STARRAIL) private readonly client: StarRail) {}

  async findUserByUid(uid: number) {
    return this.client.fetchUser(uid);
  }
}
