import { Injectable } from "@nestjs/common";
import { User } from "@scepter/domains";
import { UserMapper } from "./user.mapper";
import { InjectRepository } from "@nestjs/typeorm";
import { AbstractUserRepository } from "src/user/application/bounderies/user-port";
import { UserEntity } from "./user.entity";
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
