import { SkillTreeNodeType } from "@scepter/utilities";
import { StatData } from "./stat-data";

export class SkillTreeNode {
  id: number;
  parentSkillTreeNodeId?: number | null;
  iconUrl: string;
  statData?: StatData | null;
  skillTreeNodeType: SkillTreeNodeType;
  createdAt: Date;
  updatedAt: Date;
}
