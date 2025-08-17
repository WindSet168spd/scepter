import { Injectable } from "@nestjs/common";
import { User } from "src/user/domain/user";
import { StarRailUser } from "starrail.js";

@Injectable()
export abstract class AbstractHonkaiStarRailApiService {
  abstract findUserByUid(id: User["uid"]): Promise<StarRailUser>;
}
