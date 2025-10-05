import z from "zod";
import { overallStatsListSchema } from "src/honkai-star-rail-api/dto/overall-stats-list.dto";

export const characterStatsSchema = z.object({
  overallStats: overallStatsListSchema,
});
