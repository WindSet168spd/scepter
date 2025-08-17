import z from "zod";

export const starRailUserSchema = z.object({
  uid: z.int32(),
  achievementCount: z.int32(),
});

export type StarRailUserDto = z.infer<typeof starRailUserSchema>;
