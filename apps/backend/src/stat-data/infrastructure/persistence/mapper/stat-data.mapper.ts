import { StatData } from "src/stat-data/domain/stat-data";
import { StatDataEntity } from "src/stat-data/infrastructure/persistence/entity/stat-data.entity";
import { StatMapper } from "src/stat/infrastructure/persistence/mapper/stat.mapper";

export class StatDataMapper {
  static toDomain(raw: StatDataEntity): StatData {
    const domainEntity: StatData = {
      id: raw.id,
      value: raw.value,
      isPercent: raw.isPercent,
      type: raw.type,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    };
    if (raw.stat) {
      domainEntity.stat = StatMapper.toDomain(raw.stat);
    }
    return domainEntity;
  }

  static toPersistence(domainEntity: StatData): StatDataEntity {
    const persistenceEntity: StatDataEntity = {
      id: domainEntity.id,
      value: domainEntity.value,
      isPercent: domainEntity.isPercent,
      type: domainEntity.type,
      createdAt: domainEntity.createdAt,
      updatedAt: domainEntity.updatedAt,
    };
    if (domainEntity.stat) {
      persistenceEntity.stat = StatMapper.toPersistence(domainEntity.stat);
    }
    return persistenceEntity;
  }
}
