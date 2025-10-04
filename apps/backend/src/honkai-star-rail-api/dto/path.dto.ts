import z from "zod";
import { imageAssetSchema } from "src/honkai-star-rail-api/dto/image-asset.dto";
import { TextAssets } from "starrail.js";

export const pathSchema = z.object({
  id: z.string(),
  name: z.instanceof(TextAssets),
  icon: imageAssetSchema,
});

export type PathDto = z.infer<typeof pathSchema>;
