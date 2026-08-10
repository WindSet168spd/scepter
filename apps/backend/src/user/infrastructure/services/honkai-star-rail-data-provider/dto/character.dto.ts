import z from "zod";
import { characterDataSchema } from "./character-data.dto";
import { leveledSkillTreeNodeSchema } from "./leveled-skill-tree-node.dto";
import { statPropertyValueSchema } from "./stat-property-value.dto";
import { costumeSchema } from "./costume.dto";
import { lightconeSchema } from "./lightcone.dto";
import { relicSchema } from "./relic.dto";
import { characterStatsSchema } from "./character-stats.dto";

export const characterSchema = z.object({
  ascension: z.int32(),
  level: z.int32(),
  eidolons: z.int32(),
  characterData: characterDataSchema,
  costume: costumeSchema.nullable(),
  basicStats: z.array(statPropertyValueSchema),
  lightCone: lightconeSchema.nullable(),
  relics: z.array(relicSchema),
  skillTreeNodes: z.array(leveledSkillTreeNodeSchema),
  stats: characterStatsSchema,
});

export type CharacterDto = z.infer<typeof characterSchema>;
