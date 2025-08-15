import { RelicSetEntity } from "src/relic-set/infrastructure/persistence/entity/relic-set.entity";
import { RelicSet } from "src/relic-set/domain/relic-set";
import { StatDataMapper } from "src/stat-data/infrastructure/persistence/mapper/stat-data.mapper";

export class RelicSetMapper {
  static toDomain(raw: RelicSetEntity): RelicSet {
    const domainEntity: RelicSet = {
      id: raw.id,
      name: raw.name,
      relicSetIconUrl: raw.relicSetIconUrl,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    };
    if (raw.statsData)
      domainEntity.stats = raw.statsData.map((statData) =>
        StatDataMapper.toDomain(statData),
      );
    return domainEntity;
  }

  static toPersistence(domainEntity: RelicSet): RelicSetEntity {
    const persistenceEntity: RelicSetEntity = {
      id: domainEntity.id,
      name: domainEntity.name,
      relicSetIconUrl: domainEntity.relicSetIconUrl,
      createdAt: domainEntity.createdAt,
      updatedAt: domainEntity.updatedAt,
    };
    if (domainEntity.stats)
      persistenceEntity.statsData = domainEntity.stats.map((statData) =>
        StatDataMapper.toPersistence(statData),
      );
    return persistenceEntity;
  }
}
