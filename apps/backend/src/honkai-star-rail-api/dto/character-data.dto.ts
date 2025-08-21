import z from "zod";
import { imageAssetSchema } from "src/honkai-star-rail-api/dto/image-asset.dto";
import { combatTypeSchema } from "src/honkai-star-rail-api/dto/combat-type.dto";
import { pathSchema } from "src/honkai-star-rail-api/dto/path.dto";
import { eidolonSchema } from "src/honkai-star-rail-api/dto/eidolon.dto";

export const characterDataSchema = z.object({
  id: z.int32(),
  name: z.int32(),
  combatType: combatTypeSchema,
  eidolons: z.array(eidolonSchema),
  path: pathSchema,
  // skillTreeNodes: ,
  sideIcon: imageAssetSchema,
  splashImage: imageAssetSchema,
  stars: z.int32(),
});

export type CharacterDataDto = z.infer<typeof characterDataSchema>;
