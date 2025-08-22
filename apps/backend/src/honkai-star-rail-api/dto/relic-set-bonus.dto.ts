import z from "zod";
import { statPropertyValueSchema } from "src/honkai-star-rail-api/dto/stat-property-value.dto";

export const relicSetBonusSchema = z.object({
  needCount: z.int32(),
  stats: z.array(statPropertyValueSchema),
});

export type RelicSetBonusDto = z.infer<typeof relicSetBonusSchema>;
