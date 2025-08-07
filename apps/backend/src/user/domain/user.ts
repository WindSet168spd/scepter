import { Character } from "src/character/domain/character";

export class User {
  uid: number;
  achievementCount: number;
  icon: string;
  level: number;
  nickname: string;
  signature: string;
  createdAt: Date;
  updatedAt: Date;
  characters: Character[];
}
