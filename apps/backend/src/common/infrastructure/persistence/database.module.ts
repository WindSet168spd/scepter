import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BaseToken } from "src/common/tokens";
import { DataSource, DataSourceOptions } from "typeorm";
import { DbContext } from "./db-context";
import { TypeOrmConfigService } from "./typeorm-config.service";

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options?: DataSourceOptions) => {
        if (!options) {
          throw new Error("No DataSourceOptions");
        }
        return new DataSource(options).initialize();
      },
    }),
  ],
  providers: [
    TypeOrmConfigService,
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

    {
      provide: BaseToken.DB_CONTEXT,
      useClass: DbContext,
    },
  ],
  exports: [
    {
      provide: BaseToken.DB_CONTEXT,
      useClass: DbContext,
    },
  ],
})
export class DatabaseModule {}
