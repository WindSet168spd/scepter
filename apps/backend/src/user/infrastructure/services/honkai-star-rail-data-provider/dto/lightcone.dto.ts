import z from "zod";
import { statPropertyValueSchema } from "./stat-property-value.dto";
import { lightconeSuperimpositionSchema } from "./lightcone-superimposition.dto";
import { lightconeDataSchema } from "./lightcone-data.dto";

export const lightconeSchema = z.object({
  level: z.int32(),
  basicStats: z.array(statPropertyValueSchema),
  extraStats: z.array(statPropertyValueSchema),
  lightConeData: lightconeDataSchema,
  superimposition: lightconeSuperimpositionSchema,
  ascension: z.int32(),
});

export type LightconeDto = z.infer<typeof lightconeSchema>;
