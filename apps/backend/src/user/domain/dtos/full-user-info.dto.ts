import { UserCharacter } from "@scepter/domains";

export interface FullUserInfoDto {
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
