import { Module } from "@nestjs/common";
import { AppConfigModule } from "../configuration/app-config.module";
import { BaseToken } from "src/common/tokens";
import { TypeOrmConfigService } from "./typeorm-config.service";
import { DataSource, DataSourceOptions } from "typeorm";
import { NestFactory } from "@nestjs/core";

@Module({
  imports: [AppConfigModule],
  providers: [
    {
      inject: [TypeOrmConfigService],
      provide: BaseToken.DATA_SOURCE,
      useFactory: (typeOrmConfigService: TypeOrmConfigService) => {
        const dataSource = new DataSource(
          typeOrmConfigService.createTypeOrmOptions() as DataSourceOptions,
        );

        return dataSource.initialize();
      },
    },
  ],
})
export class MigrationModule {}

export default NestFactory.createApplicationContext(MigrationModule)
  .then((app) => app.resolve(TypeOrmConfigService))
  .then(
    (typeOrmConfigService) =>
      new DataSource(
        typeOrmConfigService.createTypeOrmOptions() as DataSourceOptions,
      ),
  );
