import z from "zod";
import { imageAssetSchema } from "src/honkai-star-rail-api/dto/image-asset.dto";

export const userIconSchema = z.object({
  icon: imageAssetSchema,
});

export type UserIconDto = z.infer<typeof userIconSchema>;
