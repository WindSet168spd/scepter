import { TextAssets } from "starrail.js";
import z from "zod";

export const relicTypeSchema = z.object({
  name: z.instanceof(TextAssets),
});

export type RelicTypeDto = z.infer<typeof relicTypeSchema>;
