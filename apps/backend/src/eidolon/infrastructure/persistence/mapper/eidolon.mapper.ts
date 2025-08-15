import { Eidolon } from "src/eidolon/domain/eidolon";
import { EidolonEntity } from "src/eidolon/infrastructure/persistence/entity/eidolon.entity";

export class EidolonMapper {
  static toDomain(raw: EidolonEntity): Eidolon {
    const domainEntity: Eidolon = {
      id: raw.id,
      order: raw.order,
      name: raw.name,
      iconUrl: raw.iconUrl,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    };
    return domainEntity;
  }

  static toPersistence(domainEntity: Eidolon): EidolonEntity {
    const persistenceEntity: EidolonEntity = {
      id: domainEntity.id,
      order: domainEntity.order,
      name: domainEntity.name,
      iconUrl: domainEntity.iconUrl,
      createdAt: domainEntity.createdAt,
      updatedAt: domainEntity.updatedAt,
    };
    return persistenceEntity;
  }
}
