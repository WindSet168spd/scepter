import z from "zod";
import { statPropertyValueSchema } from "src/honkai-star-rail-api/dto/stat-property-value.dto";

export const overallStatsListSchema = z.object({
  list: z.record(z.string(), statPropertyValueSchema),
});
