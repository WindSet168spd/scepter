import z from "zod";
import { imageAssetSchema } from "src/honkai-star-rail-api/dto/image-asset.dto";
import { skillSchema } from "src/honkai-star-rail-api/dto/skill.dto";

export const skillTreeNodeSchema = z.object({
  id: z.int32(),
  icon: imageAssetSchema,
  previousNodeId: z.int32().nullable(),
  maxLevel: z.int32(),
  levelUpSkills: z.array(skillSchema),
});

export type SkillTreeNodeDto = z.infer<typeof skillTreeNodeSchema>;
