import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import appConfig from "src/common/infrastructure/configuration/slices/app/app.config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfigService } from "src/common/infrastructure/persistence/typeorm-config.service";
import { DataSource, DataSourceOptions } from "typeorm";
import databaseConfig from "src/common/infrastructure/configuration/slices/database/database.config";
import { CommonModule } from "src/common/commom.module";
import { UserModule } from "src/user/user.module";

@Module({
  imports: [
    CommonModule,
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options?: DataSourceOptions) => {
        if (!options) {
          throw new Error("No DataSourceOptions");
        }
        return new DataSource(options).initialize();
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig],
      envFilePath: [".env"],
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
