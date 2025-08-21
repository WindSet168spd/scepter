import z from "zod";

export const characterSchema = z.object({
  ascension: z.int32(),
  level: z.int32(),
  eidolons: z.int32(),
  // characterData: ,
  // costume: ,
  // basicStats: ,
  // lightCone: ,
  // relics: ,
  // skillTreeNodes: ,
  // skills: ,
});

export type CharacterDto = z.infer<typeof characterSchema>;
