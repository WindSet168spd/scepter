import z from "zod";
import { statPropertyValueSchema } from "src/honkai-star-rail-api/dto/stat-property-value.dto";
import { lightconeSuperimpositionSchema } from "src/honkai-star-rail-api/dto/lightcone-superimposition.dto";
import { lightconeDataSchema } from "src/honkai-star-rail-api/dto/lightcone-data.dto";

export const lightconeSchema = z.object({
  level: z.int32(),
  basicStats: z.array(statPropertyValueSchema),
  extraStats: z.array(statPropertyValueSchema),
  lightConeData: lightconeDataSchema,
  superimposition: lightconeSuperimpositionSchema,
});

export type LightconeDto = z.infer<typeof lightconeSchema>;
