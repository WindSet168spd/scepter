import z from "zod";
import { characterDataSchema } from "src/honkai-star-rail-api/dto/character-data.dto";
import { leveledSkillTreeNodeSchema } from "src/honkai-star-rail-api/dto/leveled-skill-tree-node.dto";
import { statPropertyValueSchema } from "src/honkai-star-rail-api/dto/stat-property-value.dto";
import { costumeSchema } from "src/honkai-star-rail-api/dto/costume.dto";
import { lightconeSchema } from "src/honkai-star-rail-api/dto/lightcone.dto";
import { relicSchema } from "src/honkai-star-rail-api/dto/relic.dto";

export const characterSchema = z.object({
  ascension: z.int32(),
  level: z.int32(),
  eidolons: z.int32(),
  characterData: characterDataSchema,
  costume: costumeSchema,
  basicStats: z.array(statPropertyValueSchema),
  lightCone: lightconeSchema,
  relics: z.array(relicSchema),
  skillTreeNodes: z.array(leveledSkillTreeNodeSchema),
});

export type CharacterDto = z.infer<typeof characterSchema>;
