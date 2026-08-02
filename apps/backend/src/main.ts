import { NestFactory } from "@nestjs/core";
import { AppModule } from "src/app.module";
import { ConfigService } from "@nestjs/config";
import { AllConfigType } from "src/common/infrastructure/configuration/config.type";
import { VersioningType } from "@nestjs/common";
import * as bodyParser from "body-parser";
import { EffectInterceptor } from "src/common/infrastructure/api/interceptors/effect.interceptor";
import { AppErrorFilter } from "src/common/infrastructure/api/filters/app-error.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService<AllConfigType>);

  app.useGlobalInterceptors(new EffectInterceptor());
  app.useGlobalFilters(new AppErrorFilter());

  app.setGlobalPrefix(
    configService.getOrThrow("app.globalPrefix", { infer: true }),
  );
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: "1",
  });

  app.use(
    bodyParser.json({
      limit: configService.getOrThrow("app.bodyLimit", { infer: true }),
    }),
  );
  app.use(
    bodyParser.urlencoded({
      limit: configService.getOrThrow("app.bodyLimit", { infer: true }),
      extended: true,
    }),
  );

  await app.listen(
    configService.getOrThrow("app.backendPort", { infer: true }),
  );
}
void bootstrap();
