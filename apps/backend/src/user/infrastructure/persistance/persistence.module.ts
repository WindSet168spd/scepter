import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "src/user/infrastructure/persistance/entity/user.entity";
import { AbstractUserRepository } from "src/user/infrastructure/persistance/abstract-repository/user.repository";
import { UserRepository } from "src/user/infrastructure/persistance/repository/user.repository";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [{ provide: AbstractUserRepository, useClass: UserRepository }],
  exports: [AbstractUserRepository],
})
export class UserPersistenceModule {}
