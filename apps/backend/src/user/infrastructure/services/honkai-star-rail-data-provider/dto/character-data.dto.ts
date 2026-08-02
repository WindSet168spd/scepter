import z from "zod";
import { imageAssetSchema } from "./image-asset.dto";
import { combatTypeSchema } from "./combat-type.dto";
import { pathSchema } from "./path.dto";
import { eidolonSchema } from "./eidolon.dto";
import { skillTreeNodeSchema } from "./skill-tree-node.dto";
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
