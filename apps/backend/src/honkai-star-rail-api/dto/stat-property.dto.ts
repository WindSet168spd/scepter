import { textAssetsSchema } from "src/utils/dto/text-assets.dto";
import z from "zod";
import { imageAssetSchema } from "src/honkai-star-rail-api/dto/image-asset.dto";

export const statPropertySchema = z.object({
  name: textAssetsSchema,
  type: z.string(),
  icon: imageAssetSchema,
});

export type StatPropertyDto = z.infer<typeof statPropertySchema>;
