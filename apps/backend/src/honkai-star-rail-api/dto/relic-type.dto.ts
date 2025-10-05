import z from "zod";

export const relicTypeSchema = z.object({
  id: z.string(),
});

export type RelicTypeDto = z.infer<typeof relicTypeSchema>;
