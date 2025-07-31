import { Module } from "@nestjs/common";
import { AppController } from "src/app.controller";
import { AppService } from "src/app.service";
import { ConfigModule } from "@nestjs/config";
import appConfig from "src/config/app.config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
      envFilePath: [".env"],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
