import { Module } from "@nestjs/common";
import { AppController } from "src/app.controller";
import { AppService } from "src/app.service";
import { ConfigModule } from "@nestjs/config";
import appConfig from "src/config/app.config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfigService } from "src/database/typeorm-config.service";
import { DataSource, DataSourceOptions } from "typeorm";
import databaseConfig from "src/database/config/database.config";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options: DataSourceOptions) => {
        return new DataSource(options).initialize();
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig],
      envFilePath: [".env"],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
