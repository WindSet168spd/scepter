import { Injectable } from "@nestjs/common";
import { User } from "src/user/domain/user";
import { UserMapper } from "src/user/infrastructure/persistance/mapper/user.mapper";
import { InjectRepository } from "@nestjs/typeorm";
import { AbstractUserRepository } from "src/user/infrastructure/persistance/abstract-repository/user.repository";
import { UserEntity } from "src/user/infrastructure/persistance/entity/user.entity";
import { Repository } from "typeorm";
import { NullableType } from "@scepter/utilities";

@Injectable()
export class UserRepository implements AbstractUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(data: User): Promise<User> {
    const persistenceModel = UserMapper.toPersistence(data);
    const newEntity = await this.userRepository.save(
      this.userRepository.create(persistenceModel),
    );
    return UserMapper.toDomain(newEntity);
  }

  async findByUid(uid: User["uid"]): Promise<NullableType<User>> {
    const entity = await this.userRepository.findOne({
      where: { uid },
    });

    return entity ? UserMapper.toDomain(entity) : null;
  }
}
