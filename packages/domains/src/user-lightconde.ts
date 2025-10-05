import { Lightcone } from "./lightcone";
import { UserCharacter } from "./user-character";

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
