import z from "zod";
import { statPropertyValueSchema } from "./stat-property-value.dto";

export const overallStatsListSchema = z.object({
  list: z.record(z.string(), statPropertyValueSchema),
});
