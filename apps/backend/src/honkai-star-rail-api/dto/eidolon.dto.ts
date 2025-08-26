import z from "zod";
import { imageAssetSchema } from "src/honkai-star-rail-api/dto/image-asset.dto";
import { TextAssets } from "starrail.js";

export const eidolonSchema = z.object({
  id: z.int32(),
  icon: imageAssetSchema,
  rank: z.int32(),
  name: z.instanceof(TextAssets),
});

export type EidolonDto = z.infer<typeof eidolonSchema>;
