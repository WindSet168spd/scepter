import { SkillTreeNodeType } from "@scepter/utilities";
import { StatData } from "./stat-data";

export class SkillTreeNode {
  constructor(
    public id: number,
    public parentSkillTreeNodeId: number | null,
    public iconUrl: string,
    public statData: StatData[],
    public skillTreeNodeType: SkillTreeNodeType,
    public characterId: number,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
  ) {}
}
