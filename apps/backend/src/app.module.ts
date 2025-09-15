import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import appConfig from "src/config/app.config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfigService } from "src/database/typeorm-config.service";
import { DataSource, DataSourceOptions } from "typeorm";
import databaseConfig from "src/database/config/database.config";
import { EnkaModule } from "src/enka/enka.module";
import { UserModule } from "src/user/user.module";
import { CharacterModule } from "src/character/character.module";
import { HonkaiStarRailApiModule } from "src/honkai-star-rail-api/honkai-star-rail-api.module";

@Module({
  imports: [
    EnkaModule,
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
    CharacterModule,
    HonkaiStarRailApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
