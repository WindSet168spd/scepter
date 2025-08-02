import { User } from "src/user/domain/user";
import { UserEntity } from "src/user/infrastructure/persistance/entity/user.entity";

export class UserMapper {
  static toDomain(raw: UserEntity): User {
    const domainEntity = new User();
    domainEntity.uid = raw.uid;
    domainEntity.achievementCount = raw.achievementCount;
    domainEntity.icon = raw.icon;
    domainEntity.level = raw.level;
    domainEntity.nickname = raw.nickname;
    domainEntity.signature = raw.signature;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;
    // domainEntity.characters = raw;
    return domainEntity;
  }

  static toPersistence(domainEntity: User): UserEntity {
    const persistanceEntity = new UserEntity();
    persistanceEntity.uid = domainEntity.uid;
    persistanceEntity.achievementCount = domainEntity.achievementCount;
    persistanceEntity.icon = domainEntity.icon;
    persistanceEntity.level = domainEntity.level;
    persistanceEntity.nickname = domainEntity.nickname;
    persistanceEntity.signature = domainEntity.signature;
    persistanceEntity.createdAt = domainEntity.createdAt;
    persistanceEntity.updatedAt = domainEntity.updatedAt;
    return persistanceEntity;
  }
}
