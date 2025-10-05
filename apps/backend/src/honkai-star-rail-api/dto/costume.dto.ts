import z from "zod";

export const costumeSchema = z.object({
  name: z.string().nullable(),
});

export type CostumeDto = z.infer<typeof costumeSchema>;
