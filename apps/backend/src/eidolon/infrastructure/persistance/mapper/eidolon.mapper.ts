import { Eidolon } from "src/eidolon/domain/eidolon";
import { EidolonEntity } from "src/eidolon/infrastructure/persistance/entity/eidolon.entity";

export class EidolonMapper {
  static toDomain(raw: EidolonEntity): Eidolon {
    const domainEntity = new Eidolon();
    domainEntity.id = raw.id;
    domainEntity.order = raw.order;
    domainEntity.name = raw.name;
    domainEntity.iconUrl = raw.iconUrl;
    return domainEntity;
  }

  static toPersistence(domainEntity: Eidolon): EidolonEntity {
    const persistenceEntity = new EidolonEntity();
    persistenceEntity.id = domainEntity.id;
    persistenceEntity.order = domainEntity.order;
    persistenceEntity.name = domainEntity.name;
    persistenceEntity.iconUrl = domainEntity.iconUrl;
    return persistenceEntity;
  }
}
