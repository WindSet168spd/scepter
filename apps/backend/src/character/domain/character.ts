import { CombatType } from "src/combat-type/domain/combat-type";
import { Eidolon } from "src/eidolon/domain/eidolon";
import { Path } from "src/path/domain/path";
import { SkillTreeNode } from "src/skill-tree-node/domain/skill-tree-node";
import { StatData } from "src/stat-data/domain/stat-data";

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
