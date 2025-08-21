import z from "zod";
import { userIconSchema } from "src/honkai-star-rail-api/dto/user-icon.dto";

export const starRailUserSchema = z.object({
  uid: z.int32(),
  achievementCount: z.int32(),
  level: z.int32(),
  signature: z.string().nullable(),
  nickname: z.string(),
  icon: userIconSchema,
  starfaringCompanions: z.array(z.object({})),
  supportCharacters: z.array(z.object({})),
});

export type StarRailUserDto = z.infer<typeof starRailUserSchema>;
