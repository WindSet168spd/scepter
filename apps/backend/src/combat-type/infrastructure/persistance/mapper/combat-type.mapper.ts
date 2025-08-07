import { CombatType } from "src/combat-type/domain/combat-type";
import { CombatTypeEntity } from "src/combat-type/infrastructure/persistance/entity/combat-type.entity";

export class CombatTypeMapper {
  static toDomain(raw: CombatTypeEntity): CombatType {
    const domainEntity = new CombatType();
    domainEntity.id = raw.id;
    domainEntity.name = raw.name;
    domainEntity.iconUrl = raw.iconUrl;
    return domainEntity;
  }

  static toPersistence(domainEntity: CombatType): CombatTypeEntity {
    const persistenceEntity = new CombatTypeEntity();
    persistenceEntity.id = domainEntity.id;
    persistenceEntity.name = domainEntity.name;
    persistenceEntity.iconUrl = domainEntity.iconUrl;
    return persistenceEntity;
  }
}
