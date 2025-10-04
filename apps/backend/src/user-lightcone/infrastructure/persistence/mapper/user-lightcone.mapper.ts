import { LightconeMapper } from "src/lightcone/infrastructure/persistence/mapper/lightcone.mapper";
import { UserCharacterMapper } from "src/user-character/infrastructure/persistence/mapper/user-character.mapper";
import { UserLightcone } from "src/user-lightcone/domain/user-lightconde";
import { UserLightconeEntity } from "src/user-lightcone/infrastructure/persistence/entity/user-lightcone.entity";

export class UserLightconeMapper {
  static toDomain(raw: UserLightconeEntity): UserLightcone {
    const domainEntity: UserLightcone = {
      id: raw.id,
      ascension: raw.ascension,
      lightconeSuperimposition: raw.lightconeSuperimposition,
      lightconeLevel: raw.lightconeLevel,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    };

    if (raw.lightcone) {
      domainEntity.lightcone = LightconeMapper.toDomain(raw.lightcone);
    }

    if (raw.userCharacter) {
      domainEntity.userCharacter = UserCharacterMapper.toDomain(
        raw.userCharacter,
      );
    }

    return domainEntity;
  }

  static toPersistence(domainEntity: UserLightcone): UserLightconeEntity {
    const persistenceEntity: UserLightconeEntity = {
      id: domainEntity.id,
      ascension: domainEntity.ascension,
      lightconeSuperimposition: domainEntity.lightconeSuperimposition,
      lightconeLevel: domainEntity.lightconeLevel,
      createdAt: domainEntity.createdAt,
      updatedAt: domainEntity.updatedAt,
    };

    if (domainEntity.lightcone) {
      persistenceEntity.lightcone = LightconeMapper.toPersistence(
        domainEntity.lightcone,
      );
    }

    if (domainEntity.userCharacter) {
      persistenceEntity.userCharacter = UserCharacterMapper.toPersistence(
        domainEntity.userCharacter,
      );
    }

    return persistenceEntity;
  }
}
