import { Character } from "src/character/domain/character";
import { Relic } from "src/relic/domain/relic";
import { StatData } from "src/stat-data/domain/stat-data";
import { UserCharacterSkillTreeNode } from "src/user-character-skill-tree-node/domain/user-character-skill-tree-node";
import { UserLightcone } from "src/user-lightcone/domain/user-lightconde";
import { User } from "src/user/domain/user";

export class UserCharacter {
  id: string;
  character?: Character | null;
  user?: User | null;
  userLightcone?: UserLightcone | null;
  statsData?: StatData[];
  relics?: Relic[];
  costume?: string;
  level: number;
  ascension: number;
  skillTreeNodes?: UserCharacterSkillTreeNode[];
  createdAt: Date;
  updatedAt: Date;
}
