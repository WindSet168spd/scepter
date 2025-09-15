import z from "zod";
import { imageAssetSchema } from "src/honkai-star-rail-api/dto/image-asset.dto";
import { TextAssets } from "starrail.js";

export const combatTypeSchema = z.object({
  id: z.string(),
  name: z.instanceof(TextAssets),
  icon: imageAssetSchema,
});

export type CombatTypeDto = z.infer<typeof combatTypeSchema>;
