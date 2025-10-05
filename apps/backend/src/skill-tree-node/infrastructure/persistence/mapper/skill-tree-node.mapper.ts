import { SkillTreeNodeEntity } from "src/skill-tree-node/infrastructure/persistence/entity/skill-tree-node.entity";
import { SkillTreeNode } from "@scepter/domains";
import { StatDataMapper } from "src/stat-data/infrastructure/persistence/mapper/stat-data.mapper";

export class SkillTreeNodeMapper {
  static toDomain(raw: SkillTreeNodeEntity): SkillTreeNode {
    const domainEntity: SkillTreeNode = {
      id: raw.id,
      iconUrl: raw.iconUrl,
      skillTreeNodeType: raw.skillTreeNodeType,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    };
    if (raw.statData) {
      domainEntity.statData = StatDataMapper.toDomain(raw.statData);
    }
    if (raw.parentSkillTreeNode) {
      domainEntity.parentSkillTreeNodeId = raw.parentSkillTreeNode.id;
    }
    return domainEntity;
  }

  static toPersistence(domainEntity: SkillTreeNode): SkillTreeNodeEntity {
    const persistenceEntity: SkillTreeNodeEntity = {
      id: domainEntity.id,
      iconUrl: domainEntity.iconUrl,
      skillTreeNodeType: domainEntity.skillTreeNodeType,
      createdAt: domainEntity.createdAt,
      updatedAt: domainEntity.updatedAt,
    };
    if (domainEntity.statData) {
      persistenceEntity.statData = StatDataMapper.toPersistence(
        domainEntity.statData,
      );
    }
    if (domainEntity.parentSkillTreeNodeId) {
      persistenceEntity.parentSkillTreeNode = {
        id: domainEntity.parentSkillTreeNodeId,
      };
    }
    return persistenceEntity;
  }
}
