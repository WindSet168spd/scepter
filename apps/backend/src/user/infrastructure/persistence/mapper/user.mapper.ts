import { UserCharacterMapper } from "src/user-character/infrastructure/persistence/mapper/user-character.mapper";
import { User } from "src/user/domain/user";
import { UserEntity } from "src/user/infrastructure/persistence/entity/user.entity";

export class UserMapper {
  static toDomain(raw: UserEntity): User {
    const domainEntity: User = {
      uid: raw.uid,
      achievementCount: raw.achievementCount,
      icon: raw.icon,
      level: raw.level,
      nickname: raw.nickname,
      signature: raw.signature,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    };
    if (raw.userCharacters)
      domainEntity.userCharacters = raw.userCharacters.map((userCharacter) =>
        UserCharacterMapper.toDomain(userCharacter),
      );
    return domainEntity;
  }

  static toPersistence(domainEntity: User): UserEntity {
    const persistenceEntity: UserEntity = {
      uid: domainEntity.uid,
      achievementCount: domainEntity.achievementCount,
      icon: domainEntity.icon,
      level: domainEntity.level,
      nickname: domainEntity.nickname,
      signature: domainEntity.signature,
      createdAt: domainEntity.createdAt,
      updatedAt: domainEntity.updatedAt,
    };
    if (domainEntity.userCharacters)
      persistenceEntity.userCharacters = domainEntity.userCharacters.map(
        (userCharacter) => UserCharacterMapper.toPersistence(userCharacter),
      );
    return persistenceEntity;
  }
}
