import z from "zod";

export const skillSchema = z.object({
  isServant: z.boolean(),
});

export type SkillDto = z.infer<typeof skillSchema>;
