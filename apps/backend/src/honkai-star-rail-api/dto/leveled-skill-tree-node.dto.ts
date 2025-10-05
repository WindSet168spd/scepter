import z from "zod";
import { skillTreeNodeSchema } from "src/honkai-star-rail-api/dto/skill-tree-node.dto";
import { statPropertyValueSchema } from "src/honkai-star-rail-api/dto/stat-property-value.dto";
import { skillLevelSchema } from "src/honkai-star-rail-api/dto/skill-level.dto";

export const leveledSkillTreeNodeSchema = skillTreeNodeSchema.extend({
  level: skillLevelSchema,
  stats: z.array(statPropertyValueSchema),
});

export type LeveledSkillTreeNodeDto = z.infer<
  typeof leveledSkillTreeNodeSchema
>;
