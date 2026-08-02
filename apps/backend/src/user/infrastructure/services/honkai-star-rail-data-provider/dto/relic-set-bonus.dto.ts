import z from "zod";
import { statPropertyValueSchema } from "./stat-property-value.dto";

export const relicSetBonusSchema = z.object({
  needCount: z.int32(),
  stats: z.array(statPropertyValueSchema),
});

export type RelicSetBonusDto = z.infer<typeof relicSetBonusSchema>;
