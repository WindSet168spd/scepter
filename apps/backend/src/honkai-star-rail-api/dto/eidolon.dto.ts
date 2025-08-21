import z from "zod";
import { imageAssetSchema } from "./image-asset.dto";
import { textAssetsSchema } from "src/utils/dto/text-assets.dto";

export const eidolonSchema = z.object({
  id: z.int32(),
  icon: imageAssetSchema,
  rank: z.int32(),
  name: textAssetsSchema,
});
