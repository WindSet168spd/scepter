import z from "zod";
import { imageAssetSchema } from "./image-asset.dto";
import { skillSchema } from "./skill.dto";

export const skillTreeNodeSchema = z.object({
  id: z.int32(),
  icon: imageAssetSchema,
  previousNodeId: z.int32().nullable(),
  maxLevel: z.int32(),
  levelUpSkills: z.array(skillSchema),
});

export type SkillTreeNodeDto = z.infer<typeof skillTreeNodeSchema>;
