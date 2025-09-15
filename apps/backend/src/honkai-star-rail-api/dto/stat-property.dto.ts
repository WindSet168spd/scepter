import z from "zod";
import { imageAssetSchema } from "src/honkai-star-rail-api/dto/image-asset.dto";
import { TextAssets } from "starrail.js";

export const statPropertySchema = z.object({
  name: z.instanceof(TextAssets),
  type: z.string(),
  icon: imageAssetSchema,
});

export type StatPropertyDto = z.infer<typeof statPropertySchema>;
