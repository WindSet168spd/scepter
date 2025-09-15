import z from "zod";
import { statPropertyValueSchema } from "src/honkai-star-rail-api/dto/stat-property-value.dto";
import { relicDataSchema } from "src/honkai-star-rail-api/dto/relic-data.dto";

export const relicSchema = z.object({
  level: z.int32(),
  mainStat: statPropertyValueSchema,
  subStats: z.array(statPropertyValueSchema),
  relicData: relicDataSchema,
});

export type RelicDto = z.infer<typeof relicSchema>;
