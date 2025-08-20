import { Lightcone } from "src/lightcone/domain/lightcone";
import { LightconeEntity } from "src/lightcone/infrastructure/persistence/entity/lightcone.entity";
import { PathMapper } from "src/path/infrastructure/persistence/mapper/path.mapper";
import { StatDataMapper } from "src/stat-data/infrastructure/persistence/mapper/stat-data.mapper";

export class LightconeMapper {
  static toDomain(raw: LightconeEntity): Lightcone {
    const domainEntity: Lightcone = {
      id: raw.id,
      name: raw.name,
      stars: raw.stars,
      imageUrl: raw.imageUrl,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    };
    if (raw.path) domainEntity.path = PathMapper.toDomain(raw.path);
    if (raw.statsData)
      domainEntity.statsData = raw.statsData.map((statData) =>
        StatDataMapper.toDomain(statData),
      );
    return domainEntity;
  }

  static toPersistence(domainEntity: Lightcone): LightconeEntity {
    const persistenceEntity: LightconeEntity = {
      id: domainEntity.id,
      name: domainEntity.name,
      stars: domainEntity.stars,
      imageUrl: domainEntity.imageUrl,
      createdAt: domainEntity.createdAt,
      updatedAt: domainEntity.updatedAt,
    };
    if (domainEntity.path)
      persistenceEntity.path = PathMapper.toPersistence(domainEntity.path);
    if (domainEntity.statsData)
      persistenceEntity.statsData = domainEntity.statsData.map((statData) =>
        StatDataMapper.toPersistence(statData),
      );
    return persistenceEntity;
  }
}
