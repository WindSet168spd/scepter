import { Character } from "src/character/domain/character";
import { Lightcone } from "src/lightcone/domain/lightcone";
import { Relic } from "src/relic/domain/relic";
import { UserCharacterSkillTreeNode } from "src/user-character-skill-tree-node/domain/user-character-skill-tree-node";
import { User } from "src/user/domain/user";

export class UserCharacter {
  id: number;
  character?: Character | null;
  user?: User | null;
  lightcone?: Lightcone | null;
  relics?: Relic[];
  costume?: string;
  level: number;
  ascension: number;
  skillTreeNodes?: UserCharacterSkillTreeNode[];
  createdAt: Date;
  updatedAt: Date;
}
