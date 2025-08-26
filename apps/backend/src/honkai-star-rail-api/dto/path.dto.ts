import { textAssetsSchema } from "src/utils/dto/text-assets.dto";
import z from "zod";
import { imageAssetSchema } from "src/honkai-star-rail-api/dto/image-asset.dto";

export const pathSchema = z.object({
  id: z.string(),
  name: textAssetsSchema,
  icon: imageAssetSchema,
});
