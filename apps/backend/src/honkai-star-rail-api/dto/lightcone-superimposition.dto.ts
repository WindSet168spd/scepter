import z from "zod";
import { statPropertyValueSchema } from "src/honkai-star-rail-api/dto/stat-property-value.dto";

export const lightconeSuperimpositionSchema = z.object({
  level: z.int32(),
  stats: z.array(statPropertyValueSchema),
});

export type LightconeSuperimpositionDto = z.infer<
  typeof lightconeSuperimpositionSchema
>;
