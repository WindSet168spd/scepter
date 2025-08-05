import { CombatType } from "src/combat-type/domain/combat-type";
import { Path } from "src/path/domain/path";
import { SkillTreeNode } from "src/skill-tree-node/domain/skill-tree-node";
import { Eidolon } from "starrail.js";

export class Character {
  id: number;
  baseHp: number;
  baseAtack: number;
  baseSpeed: number;
  baseDefence: number;
  splashArt: string;
  stars: number;
  icon: string;
  path: Path;
  combatType: CombatType;
  skillTreeNodes: SkillTreeNode[];
  eidolons: Eidolon[];
}
