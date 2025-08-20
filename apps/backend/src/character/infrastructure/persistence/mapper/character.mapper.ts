import { Character } from "src/character/domain/character";
import { CharacterEntity } from "src/character/infrastructure/persistence/entity/character.entity";
import { CombatTypeMapper } from "src/combat-type/infrastructure/persistence/mapper/combat-type.mapper";
import { EidolonMapper } from "src/eidolon/infrastructure/persistence/mapper/eidolon.mapper";
import { PathMapper } from "src/path/infrastructure/persistence/mapper/path.mapper";
import { SkillTreeNodeMapper } from "src/skill-tree-node/infrastructure/persistence/mapper/skill-tree-node.mapper";
import { StatDataMapper } from "src/stat-data/infrastructure/persistence/mapper/stat-data.mapper";

export class CharacterMapper {
  static toDomain(raw: CharacterEntity): Character {
    const domainEntity: Character = {
      id: raw.id,
      name: raw.name,
      splashArtUrl: raw.splashArtUrl,
      iconUrl: raw.iconUrl,
      stars: raw.stars,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    };
    if (raw.path) domainEntity.path = PathMapper.toDomain(raw.path);
    if (raw.combatType)
      domainEntity.combatType = CombatTypeMapper.toDomain(raw.combatType);
    if (raw.skillTreeNodes)
      domainEntity.skillTreeNodes = raw.skillTreeNodes.map((skillTreeNode) =>
        SkillTreeNodeMapper.toDomain(skillTreeNode),
      );
    if (raw.eidolons)
      domainEntity.eidolons = raw.eidolons.map((eidolon) =>
        EidolonMapper.toDomain(eidolon),
      );
    if (raw.statsData)
      domainEntity.baseStats = raw.statsData.map((statData) =>
        StatDataMapper.toDomain(statData),
      );
    return domainEntity;
  }

  static toPersistence(domainEntity: Character): CharacterEntity {
    const persistenceEntity: CharacterEntity = {
      id: domainEntity.id,
      name: domainEntity.name,
      splashArtUrl: domainEntity.splashArtUrl,
      iconUrl: domainEntity.iconUrl,
      stars: domainEntity.stars,
      createdAt: domainEntity.createdAt,
      updatedAt: domainEntity.updatedAt,
    };
    if (domainEntity.path)
      persistenceEntity.path = PathMapper.toPersistence(domainEntity.path);
    if (domainEntity.combatType)
      persistenceEntity.combatType = CombatTypeMapper.toPersistence(
        domainEntity.combatType,
      );
    if (domainEntity.skillTreeNodes)
      persistenceEntity.skillTreeNodes = domainEntity.skillTreeNodes.map(
        (skillTreeNode) => SkillTreeNodeMapper.toPersistence(skillTreeNode),
      );
    if (domainEntity.eidolons)
      persistenceEntity.eidolons = domainEntity.eidolons.map((eidolon) =>
        EidolonMapper.toPersistence(eidolon),
      );
    if (domainEntity.baseStats)
      persistenceEntity.statsData = domainEntity.baseStats.map((statData) =>
        StatDataMapper.toPersistence(statData),
      );
    return persistenceEntity;
  }
}
