import z from "zod";
import { imageAssetSchema } from "src/honkai-star-rail-api/dto/image-asset.dto";
import { textAssetsSchema } from "src/utils/dto/text-assets.dto";
import { pathSchema } from "src/honkai-star-rail-api/dto/path.dto";

export const lightconeDataSchema = z.object({
  cardImage: imageAssetSchema,
  id: z.int32(),
  name: textAssetsSchema,
  path: pathSchema,
  stars: z.int32(),
});

export type LightconeDataDto = z.infer<typeof lightconeDataSchema>;
