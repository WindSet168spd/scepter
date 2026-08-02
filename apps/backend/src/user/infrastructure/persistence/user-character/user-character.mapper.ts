import { CharacterMapper } from "../character/character.mapper";
import { RelicMapper } from "../relic/relic.mapper";
import { StatDataMapper } from "../stat-data/stat-data.mapper";
import { UserCharacterSkillTreeNodeMapper } from "../user-character-skill-tree-node/user-character-skill-tree-node.mapper";
import { UserCharacter } from "@scepter/domains";
import { UserCharacterEntity } from "./user-character.entity";
import { UserLightconeMapper } from "../user-lightcone/user-lightcone.mapper";
import { UserMapper } from "../user/user.mapper";

export class UserCharacterMapper {
  static toDomain(raw: UserCharacterEntity): UserCharacter {
    const domainEntity: UserCharacter = {
      id: raw.id,
      costume: raw.costume,
      level: raw.level,
      ascension: raw.ascension,
      eidolons: raw.eidolons,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    };
    if (raw.user) {
      domainEntity.user = UserMapper.toDomain(raw.user);
    }
    if (raw.userLightcone) {
      domainEntity.userLightcone = UserLightconeMapper.toDomain(
        raw.userLightcone,
      );
    }
    if (raw.character) {
      domainEntity.character = CharacterMapper.toDomain(raw.character);
    }
    if (raw.relics) {
      domainEntity.relics = raw.relics.map((relic) =>
        RelicMapper.toDomain(relic),
      );
    }
    if (raw.userCharacterSkillTreeNodes) {
      domainEntity.skillTreeNodes = raw.userCharacterSkillTreeNodes.map(
        (skillTreeNode) =>
          UserCharacterSkillTreeNodeMapper.toDomain(skillTreeNode),
      );
    }
    if (raw.statsData) {
      domainEntity.statsData = raw.statsData.map((statData) =>
        StatDataMapper.toDomain(statData),
      );
    }
    return domainEntity;
  }

  static toPersistence(domainEntity: UserCharacter): UserCharacterEntity {
    const persistenceEntity: UserCharacterEntity = {
      id: domainEntity.id,
      costume: domainEntity.costume,
      level: domainEntity.level,
      eidolons: domainEntity.eidolons,
      ascension: domainEntity.ascension,
      createdAt: domainEntity.createdAt,
      updatedAt: domainEntity.updatedAt,
    };
    if (domainEntity.user) {
      persistenceEntity.user = UserMapper.toPersistence(domainEntity.user);
    }
    if (domainEntity.userLightcone) {
      persistenceEntity.userLightcone = UserLightconeMapper.toPersistence(
        domainEntity.userLightcone,
      );
    }
    if (domainEntity.character) {
      persistenceEntity.character = CharacterMapper.toPersistence(
        domainEntity.character,
      );
    }
    if (domainEntity.relics) {
      persistenceEntity.relics = domainEntity.relics.map((relic) =>
        RelicMapper.toPersistence(relic),
      );
    }
    if (domainEntity.skillTreeNodes) {
      persistenceEntity.userCharacterSkillTreeNodes =
        domainEntity.skillTreeNodes.map((skillTreeNode) =>
          UserCharacterSkillTreeNodeMapper.toPersistence(skillTreeNode),
        );
    }
    if (domainEntity.statsData) {
      persistenceEntity.statsData = domainEntity.statsData.map((statData) =>
        StatDataMapper.toPersistence(statData),
      );
    }
    return persistenceEntity;
  }
}
