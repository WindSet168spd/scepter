import { CharacterMapper } from "src/character/infrastructure/persistence/mapper/character.mapper";
import { LightconeMapper } from "src/lightcone/infrastructure/persistence/mapper/lightcone.mapper";
import { RelicMapper } from "src/relic/infrastructure/persistence/mapper/relic.mapper";
import { UserCharacterSkillTreeNodeMapper } from "src/user-character-skill-tree-node/infrastructure/persistence/mapper/user-character-skill-tree-node.mapper";
import { UserCharacter } from "src/user-character/domain/user-character";
import { UserCharacterEntity } from "src/user-character/infrastructure/persistence/entity/user-character.entity";
import { UserMapper } from "src/user/infrastructure/persistence/mapper/user.mapper";

export class UserCharacterMapper {
  static toDomain(raw: UserCharacterEntity): UserCharacter {
    const domainEntity: UserCharacter = {
      id: raw.id,
      costume: raw.costume,
      level: raw.level,
      ascension: raw.ascension,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    };
    if (raw.user) domainEntity.user = UserMapper.toDomain(raw.user);
    if (raw.lightcone)
      domainEntity.lightcone = LightconeMapper.toDomain(raw.lightcone);
    if (raw.character)
      domainEntity.character = CharacterMapper.toDomain(raw.character);
    if (raw.relics)
      domainEntity.relics = raw.relics.map((relic) =>
        RelicMapper.toDomain(relic),
      );
    if (raw.userCharacterSkillTreeNodes)
      domainEntity.skillTreeNodes = raw.userCharacterSkillTreeNodes.map(
        (skillTreeNode) =>
          UserCharacterSkillTreeNodeMapper.toDomain(skillTreeNode),
      );
    return domainEntity;
  }

  static toPersistence(domainEntity: UserCharacter): UserCharacterEntity {
    const persistenceEntity: UserCharacterEntity = {
      id: domainEntity.id,
      costume: domainEntity.costume,
      level: domainEntity.level,
      ascension: domainEntity.ascension,
      createdAt: domainEntity.createdAt,
      updatedAt: domainEntity.updatedAt,
    };
    if (domainEntity.user)
      persistenceEntity.user = UserMapper.toPersistence(domainEntity.user);
    if (domainEntity.lightcone)
      persistenceEntity.lightcone = LightconeMapper.toPersistence(
        domainEntity.lightcone,
      );
    if (domainEntity.character)
      persistenceEntity.character = CharacterMapper.toPersistence(
        domainEntity.character,
      );
    if (domainEntity.relics)
      persistenceEntity.relics = domainEntity.relics.map((relic) =>
        RelicMapper.toPersistence(relic),
      );
    if (domainEntity.skillTreeNodes)
      persistenceEntity.userCharacterSkillTreeNodes =
        domainEntity.skillTreeNodes.map((skillTreeNode) =>
          UserCharacterSkillTreeNodeMapper.toPersistence(skillTreeNode),
        );
    return persistenceEntity;
  }
}
