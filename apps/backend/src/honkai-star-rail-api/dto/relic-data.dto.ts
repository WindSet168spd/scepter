import z from "zod";
import { relicTypeSchema } from "src/honkai-star-rail-api/dto/relic-type.dto";
import { relicSetSchema } from "./relic-set.dto";

export const relicDataSchema = z.object({
  id: z.int32(),
  stars: z.int32(),
  type: relicTypeSchema,
  set: relicSetSchema,
});

export type RelicDataDto = z.infer<typeof relicDataSchema>;
