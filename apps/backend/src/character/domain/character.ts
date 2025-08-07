import { CombatType } from "src/combat-type/domain/combat-type";
import { Eidolon } from "src/eidolon/domain/eidolon";
import { Path } from "src/path/domain/path";
import { SkillTreeNode } from "src/skill-tree-node/domain/skill-tree-node";
import { StatData } from "src/stat-data/domain/stat-data";

export class Character {
  id: number;
  splashArtUrl: string;
  stats: StatData[];
  stars: number;
  iconUrl: string;
  path: Path;
  combatType: CombatType;
  skillTreeNodes: SkillTreeNode[];
  eidolons: Eidolon[];
}
