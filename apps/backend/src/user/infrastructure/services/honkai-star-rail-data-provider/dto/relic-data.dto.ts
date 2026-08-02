import z from "zod";
import { relicTypeSchema } from "./relic-type.dto";
import { imageAssetSchema } from "./image-asset.dto";
import { relicSetSchema } from "./relic-set.dto";

export const relicDataSchema = z.object({
  id: z.int32(),
  stars: z.int32(),
  icon: imageAssetSchema,
  type: relicTypeSchema,
  set: relicSetSchema,
});

export type RelicDataDto = z.infer<typeof relicDataSchema>;
