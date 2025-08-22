import { textAssetsSchema } from "src/utils/dto/text-assets.dto";
import z from "zod";
import { imageAssetSchema } from "src/honkai-star-rail-api/dto/image-asset.dto";
import { relicSetBonusSchema } from "src/honkai-star-rail-api/dto/relic-set-bonus.dto";

export const relicSetSchema = z.object({
  name: textAssetsSchema,
  id: z.int32(),
  icon: imageAssetSchema,
  setBonus: z.array(relicSetBonusSchema),
});

export type RelicSetDto = z.infer<typeof relicSetSchema>;
