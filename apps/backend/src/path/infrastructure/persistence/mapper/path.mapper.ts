import { Path } from "src/path/domain/path";
import { PathEntity } from "src/path/infrastructure/persistence/entity/path.entity";

export class PathMapper {
  static toDomain(raw: PathEntity): Path {
    const domainEntity: Path = {
      id: raw.id,
      name: raw.name,
      iconUrl: raw.iconUrl,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    };
    return domainEntity;
  }

  static toPersistence(domainEntity: Path): PathEntity {
    const persistenceEntity: PathEntity = {
      id: domainEntity.id,
      name: domainEntity.name,
      iconUrl: domainEntity.iconUrl,
      createdAt: domainEntity.createdAt,
      updatedAt: domainEntity.updatedAt,
    };
    return persistenceEntity;
  }
}
