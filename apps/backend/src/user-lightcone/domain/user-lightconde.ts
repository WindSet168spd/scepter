import { Lightcone } from "src/lightcone/domain/lightcone";
import { UserCharacter } from "src/user-character/domain/user-character";

export class UserLightcone {
  id: string;
  lightconeLevel: number;
  lightconeSuperimposition: number;
  ascension: number;
  lightcone?: Lightcone | null;
  userCharacter?: UserCharacter | null;
  createdAt: Date;
  updatedAt: Date;
}
