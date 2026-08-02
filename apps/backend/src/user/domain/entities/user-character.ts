import { StatData } from "./stat-data";
import { UserCharacterSkillTreeNode } from "./user-character-skill-tree-node";
import { UserLightcone } from "./user-lightconde";

export class UserCharacter {
  constructor(
    public id: string,
    public characterId: number,
    public userId: number,
    public userLightcone: UserLightcone | null,
    public statsData: StatData[],
    public level: number,
    public ascension: number,
    public eidolons: number,
    public skillTreeNodes: UserCharacterSkillTreeNode[],
    public costume?: string,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
  ) {}
}
