import { Character } from "./character";
import { Relic } from "./relic";
import { StatData } from "./stat-data";
import { UserCharacterSkillTreeNode } from "./user-character-skill-tree-node";
import { UserLightcone } from "./user-lightconde";
import { User } from "./user";

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
