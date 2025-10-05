import { SkillTreeNode } from "./skill-tree-node";
import { UserCharacter } from "./user-character";

export class UserCharacterSkillTreeNode {
  id: string;
  userCharacter?: UserCharacter | null;
  skillTreeNode?: SkillTreeNode | null;
  level: number;
  createdAt: Date;
  updatedAt: Date;
}
