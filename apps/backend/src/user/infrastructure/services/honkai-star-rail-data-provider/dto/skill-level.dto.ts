import z from "zod";

export const skillLevelSchema = z.object({
  base: z.int32(),
  extra: z.int32(),
  value: z.int32(),
});

export type SkillLevelDto = z.infer<typeof skillLevelSchema>;
