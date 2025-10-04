import { SkillTreeNode } from "src/skill-tree-node/domain/skill-tree-node";
import { UserCharacter } from "src/user-character/domain/user-character";

export class UserCharacterSkillTreeNode {
  id: string;
  userCharacter?: UserCharacter | null;
  skillTreeNode?: SkillTreeNode | null;
  level: number;
  createdAt: Date;
  updatedAt: Date;
}
