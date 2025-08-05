import { Character } from "src/character/domain/character";
import { Lightcone } from "src/lightcone/domain/lightcone";
import { Relic } from "src/relic/domain/relic";
import { User } from "src/user/domain/user";

export class UserCharacter {
  id: number;
  character: Character;
  user: User;
  lightcone: Lightcone;
  relics: Relic[];
  costume?: string;
  level: number;
  ascension: number;
}
