import z from "zod";
import { statPropertySchema } from "src/honkai-star-rail-api/dto/stat-property.dto";

export const statPropertyValueSchema = z.object({
  isPercent: z.boolean(),
  value: z.number(),
  type: z.string(),
  statPropery: statPropertySchema,
});

export type StatPropertyDto = z.infer<typeof statPropertySchema>;
