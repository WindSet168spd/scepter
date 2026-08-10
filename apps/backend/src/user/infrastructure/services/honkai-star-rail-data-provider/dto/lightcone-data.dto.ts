import z from "zod";
import { imageAssetSchema } from "./image-asset.dto";
import { pathSchema } from "./path.dto";
import { TextAssets } from "starrail.js";

export const lightconeDataSchema = z.object({
  cardImage: imageAssetSchema,
  id: z.int32(),
  name: z.instanceof(TextAssets),
  path: pathSchema,
  stars: z.int32(),
});

export type LightconeDataDto = z.infer<typeof lightconeDataSchema>;
