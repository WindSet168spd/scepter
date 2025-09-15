import z from "zod";
import { imageAssetSchema } from "src/honkai-star-rail-api/dto/image-asset.dto";
import { relicSetBonusSchema } from "src/honkai-star-rail-api/dto/relic-set-bonus.dto";
import { TextAssets } from "starrail.js";

export const relicSetSchema = z.object({
  name: z.instanceof(TextAssets),
  id: z.int32(),
  icon: imageAssetSchema,
  setBonus: z.array(relicSetBonusSchema),
});

export type RelicSetDto = z.infer<typeof relicSetSchema>;
