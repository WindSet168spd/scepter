import { SkillTreeNodeMapper } from "../skill-tree-node/skill-tree-node.mapper";
import { UserCharacterSkillTreeNode } from "@scepter/domains";
import { UserCharacterSkillTreeNodeEntity } from "./user-character-skill-tree-node.entity";
import { UserCharacterMapper } from "../user-character/user-character.mapper";

export class UserCharacterSkillTreeNodeMapper {
  static toDomain(
    raw: UserCharacterSkillTreeNodeEntity,
  ): UserCharacterSkillTreeNode {
    const domainEntity: UserCharacterSkillTreeNode = {
      id: raw.id,
      level: raw.level,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    };
    if (raw.userCharacter) {
      domainEntity.userCharacter = UserCharacterMapper.toDomain(
        raw.userCharacter,
      );
    }
    if (raw.skillTreeNode) {
      domainEntity.skillTreeNode = SkillTreeNodeMapper.toDomain(
        raw.skillTreeNode,
      );
    }
    return domainEntity;
  }

  static toPersistence(
    domainEntity: UserCharacterSkillTreeNode,
  ): UserCharacterSkillTreeNodeEntity {
    const persistenceEntity: UserCharacterSkillTreeNodeEntity = {
      id: domainEntity.id,
      level: domainEntity.level,
      createdAt: domainEntity.createdAt,
      updatedAt: domainEntity.updatedAt,
    };
    if (domainEntity.userCharacter) {
      persistenceEntity.userCharacter = UserCharacterMapper.toPersistence(
        domainEntity.userCharacter,
      );
    }
    if (domainEntity.skillTreeNode) {
      persistenceEntity.skillTreeNode = SkillTreeNodeMapper.toPersistence(
        domainEntity.skillTreeNode,
      );
    }
    return persistenceEntity;
  }
}
