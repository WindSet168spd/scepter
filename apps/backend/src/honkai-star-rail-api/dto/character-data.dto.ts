import z from "zod";
import { imageAssetSchema } from "src/honkai-star-rail-api/dto/image-asset.dto";
import { combatTypeSchema } from "src/honkai-star-rail-api/dto/combat-type.dto";
import { pathSchema } from "src/honkai-star-rail-api/dto/path.dto";
import { eidolonSchema } from "src/honkai-star-rail-api/dto/eidolon.dto";
import { skillTreeNodeSchema } from "src/honkai-star-rail-api/dto/skill-tree-node.dto";
import { TextAssets } from "starrail.js";

export const characterDataSchema = z.object({
  id: z.int32(),
  name: z.instanceof(TextAssets),
  combatType: combatTypeSchema,
  eidolons: z.array(eidolonSchema),
  path: pathSchema,
  skillTreeNodes: z.array(skillTreeNodeSchema),
  sideIcon: imageAssetSchema,
  splashImage: imageAssetSchema,
  stars: z.int32(),
});

export type CharacterDataDto = z.infer<typeof characterDataSchema>;
