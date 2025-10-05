import { CombatType } from "@scepter/domains";
import { CombatTypeEntity } from "src/combat-type/infrastructure/persistence/entity/combat-type.entity";

export class CombatTypeMapper {
  static toDomain(raw: CombatTypeEntity): CombatType {
    const domainEntity: CombatType = {
      id: raw.id,
      name: raw.name,
      iconUrl: raw.iconUrl,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    };
    return domainEntity;
  }

  static toPersistence(domainEntity: CombatType): CombatTypeEntity {
    const persistenceEntity: CombatTypeEntity = {
      id: domainEntity.id,
      name: domainEntity.name,
      iconUrl: domainEntity.iconUrl,
      createdAt: domainEntity.createdAt,
      updatedAt: domainEntity.updatedAt,
    };
    return persistenceEntity;
  }
}
