import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import appConfig from "./slices/app/app.config";
import databaseConfig from "./slices/database/database.config";

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig],
      envFilePath: [".env"],
    }),
  ],
})
export class AppConfigModule {}
