import z from "zod";

export const relicTypeSchema = z.object({
  name: z.string(),
});

export type RelicTypeDto = z.infer<typeof relicTypeSchema>;
