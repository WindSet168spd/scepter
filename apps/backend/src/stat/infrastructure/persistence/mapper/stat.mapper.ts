import { Stat } from "src/stat/domain/stat";
import { StatEntity } from "src/stat/infrastructure/persistence/entity/stat.entity";

export class StatMapper {
  static toDomain(raw: StatEntity): Stat {
    const domainEntity: Stat = {
      id: raw.id,
      name: raw.name,
      iconUrl: raw.iconUrl,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    };
    return domainEntity;
  }

  static toPersistence(domainEntity: Stat): StatEntity {
    const persistenceEntity: StatEntity = {
      id: domainEntity.id,
      name: domainEntity.name,
      iconUrl: domainEntity.iconUrl,
      createdAt: domainEntity.createdAt,
      updatedAt: domainEntity.updatedAt,
    };
    return persistenceEntity;
  }
}
