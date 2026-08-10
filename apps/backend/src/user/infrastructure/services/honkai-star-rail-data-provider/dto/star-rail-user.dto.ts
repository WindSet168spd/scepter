import z from "zod";
import { userIconSchema } from "./user-icon.dto";
import { characterSchema } from "./character.dto";

export const starRailUserSchema = z.object({
  uid: z.int32(),
  achievementCount: z.int32(),
  level: z.int32(),
  signature: z.string().nullable(),
  nickname: z.string(),
  icon: userIconSchema,
  starfaringCompanions: z.array(characterSchema),
  supportCharacters: z.array(characterSchema),
});

export type StarRailUserDto = z.infer<typeof starRailUserSchema>;
