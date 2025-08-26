import { textAssetsSchema } from "src/utils/dto/text-assets.dto";
import z from "zod";

export const relicTypeSchema = z.object({
  name: textAssetsSchema,
});

export type RelicTypeDto = z.infer<typeof relicTypeSchema>;
