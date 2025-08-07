import { SkillTreeNode } from "src/skill-tree-node/domain/skill-tree-node";
import { UserCharacter } from "src/user-character/domain/user-character";

export class UserCharacterSkillTreeNode {
  id: number;
  userCharacter: UserCharacter;
  skillTreeNode: SkillTreeNode;
  level: number;
}
