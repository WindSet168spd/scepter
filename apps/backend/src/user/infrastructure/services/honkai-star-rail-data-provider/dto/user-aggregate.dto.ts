import { Character } from "src/user/domain/entities/character";
import { Eidolon } from "src/user/domain/entities/eidolon";
import { Lightcone } from "src/user/domain/entities/lightcone";
import { Relic } from "src/user/domain/entities/relic";
import { RelicSet } from "src/user/domain/entities/relic-set";
import { SkillTreeNode } from "src/user/domain/entities/skill-ree-node";
import { User } from "src/user/domain/entities/user";
import { UserCharacter } from "src/user/domain/entities/user-character";

export interface UserAggregateDto {
  user: User;
  characters: Character[];
  eidolons: Eidolon[];
  skillTreeNodes: SkillTreeNode[];
  lightcones: Lightcone[];
  relicSets: RelicSet[];
  relics: Relic[];
  userCharacters: UserCharacter[];
}
