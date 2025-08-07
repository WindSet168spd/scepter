import { SkillTreeNodeType } from "@scepter/utilities";
import { StatData } from "src/stat-data/domain/stat-data";

export class SkillTreeNode {
  id: number;
  previousNodeId: number;
  characterId: number;
  iconUrl: string;
  stat?: StatData;
  skillTreeNodeType: SkillTreeNodeType;
}
