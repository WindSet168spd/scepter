import { Global, Module } from "@nestjs/common";

import { DatabaseModule } from "./infrastructure/persistence/database.module";
import { AppConfigModule } from "./infrastructure/configuration/app-config.module";

@Global()
@Module({
  imports: [DatabaseModule, AppConfigModule],
})
export class CommonModule {}
