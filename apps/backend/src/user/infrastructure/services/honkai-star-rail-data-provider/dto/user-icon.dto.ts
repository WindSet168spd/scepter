import z from "zod";
import { imageAssetSchema } from "./image-asset.dto";

export const userIconSchema = z.object({
  icon: imageAssetSchema,
});

export type UserIconDto = z.infer<typeof userIconSchema>;
