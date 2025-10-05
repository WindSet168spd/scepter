import { CombatType } from "./combat-type";
import { Eidolon } from "./eidolon";
import { Path } from "./path";
import { SkillTreeNode } from "./skill-tree-node";
import { StatData } from "./stat-data";

export class Character {
  id: number;
  name: string;
  splashArtUrl: string;
  baseStats?: StatData[] | null;
  stars: number;
  iconUrl: string;
  path?: Path | null;
  combatType?: CombatType | null;
  skillTreeNodes?: SkillTreeNode[] | null;
  eidolons?: Eidolon[] | null;
  createdAt: Date;
  updatedAt: Date;
}
