import z from "zod";
import { skillTreeNodeSchema } from "src/honkai-star-rail-api/dto/skill-tree-node.dto";
import { statPropertyValueSchema } from "src/honkai-star-rail-api/dto/stat-property-value.dto";

export const leveledSkillTreeNodeSchema = skillTreeNodeSchema.extend({
  level: z.int32(),
  stats: z.array(statPropertyValueSchema),
});

export type LeveledSkillTreeNodeDto = z.infer<
  typeof leveledSkillTreeNodeSchema
>;
