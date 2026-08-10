import z from "zod";
import { skillTreeNodeSchema } from "./skill-tree-node.dto";
import { statPropertyValueSchema } from "./stat-property-value.dto";
import { skillLevelSchema } from "./skill-level.dto";

export const leveledSkillTreeNodeSchema = skillTreeNodeSchema.extend({
  level: skillLevelSchema,
  stats: z.array(statPropertyValueSchema),
});

export type LeveledSkillTreeNodeDto = z.infer<
  typeof leveledSkillTreeNodeSchema
>;
