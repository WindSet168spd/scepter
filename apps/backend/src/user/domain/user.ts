import { UserCharacter } from "src/user-character/domain/user-character";

export class User {
  uid: number;
  achievementCount: number;
  icon: string;
  level: number;
  nickname: string;
  signature: string | null;
  createdAt: Date;
  updatedAt: Date;
  userCharacters?: UserCharacter[] | null;
}
