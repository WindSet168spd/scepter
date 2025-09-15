import { RelicSetMapper } from "src/relic-set/infrastructure/persistence/mapper/relic-set.mapper";
import { Relic } from "src/relic/domain/relic";
import { RelicEntity } from "src/relic/infrastructure/persistence/entity/relic.entity";
import { StatDataMapper } from "src/stat-data/infrastructure/persistence/mapper/stat-data.mapper";

export class RelicMapper {
  static toDomain(raw: RelicEntity): Relic {
    const domainEntity: Relic = {
      id: raw.id,
      relicPart: raw.relicPart,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    };
    if (raw.relicSet) {
      domainEntity.relicSet = RelicSetMapper.toDomain(raw.relicSet);
    }
    if (raw.statsData) {
      domainEntity.statsData = raw.statsData.map((statData) =>
        StatDataMapper.toDomain(statData),
      );
    }
    return domainEntity;
  }

  static toPersistence(domainEntity: Relic): RelicEntity {
    const persistenceEntity: RelicEntity = {
      id: domainEntity.id,
      relicPart: domainEntity.relicPart,
      createdAt: domainEntity.createdAt,
      updatedAt: domainEntity.updatedAt,
    };
    if (domainEntity.relicSet) {
      persistenceEntity.relicSet = RelicSetMapper.toPersistence(
        domainEntity.relicSet,
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
