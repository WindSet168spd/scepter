import z from "zod";
import { overallStatsListSchema } from "./overall-stats-list.dto";

export const characterStatsSchema = z.object({
  overallStats: overallStatsListSchema,
});
