import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "src/user/infrastructure/persistence/entity/user.entity";
import { AbstractUserRepository } from "src/user/infrastructure/persistence/abstract-repository/user.repository";
import { UserRepository } from "src/user/infrastructure/persistence/repository/user.repository";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [{ provide: AbstractUserRepository, useClass: UserRepository }],
  exports: [AbstractUserRepository],
})
export class UserPersistenceModule {}
