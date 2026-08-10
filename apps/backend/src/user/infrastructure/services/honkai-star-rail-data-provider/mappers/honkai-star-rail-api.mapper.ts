import { statType, StatType } from "@scepter/utilities";
import { Character } from "src/user/domain/entities/character";
import { CombatType } from "src/user/domain/entities/combat-type";
import { Eidolon } from "src/user/domain/entities/eidolon";
import { Lightcone } from "src/user/domain/entities/lightcone";
import { Path } from "src/user/domain/entities/path";
import { Relic } from "src/user/domain/entities/relic";
import { RelicSet } from "src/user/domain/entities/relic-set";
import { SkillTreeNode } from "src/user/domain/entities/skill-ree-node";
import { Stat } from "src/user/domain/entities/stat";
import { StatData } from "src/user/domain/entities/stat-data";
import { User } from "src/user/domain/entities/user";
import { UserCharacter } from "src/user/domain/entities/user-character";
import { UserCharacterSkillTreeNode } from "src/user/domain/entities/user-character-skill-tree-node";
import { UserLightcone } from "src/user/domain/entities/user-lightconde";
import { relicPartMap } from "../honkai-star-rail-data-provider.constants";
import { CharacterDto } from "../dto/character.dto";
import { CombatTypeDto } from "../dto/combat-type.dto";
import { EidolonDto } from "../dto/eidolon.dto";
import { LeveledSkillTreeNodeDto } from "../dto/leveled-skill-tree-node.dto";
import { LightconeDto } from "../dto/lightcone.dto";
import { PathDto } from "../dto/path.dto";
import { RelicDto } from "../dto/relic.dto";
import { RelicSetDto } from "../dto/relic-set.dto";
import { StarRailUserDto } from "../dto/star-rail-user.dto";
import { StatPropertyDto } from "../dto/stat-property.dto";
import { StatPropertyValueDto } from "../dto/stat-property-value.dto";
import { UserAggregateDto } from "../dto/user-aggregate.dto";

interface FullUserInfoAccumulator {
  characters: Map<number, Character>;
  eidolons: Map<number, Eidolon>;
  skillTreeNodes: Map<number, SkillTreeNode>;
  lightcones: Map<number, Lightcone>;
  relicSets: Map<number, RelicSet>;
  relics: Relic[];
  userCharacters: UserCharacter[];
}

export class HonkaiStarRailApiMapper {
  static toDomainUser(honkaiStarRailUser: StarRailUserDto): UserAggregateDto {
    const accumulator: FullUserInfoAccumulator = {
      characters: new Map(),
      eidolons: new Map(),
      skillTreeNodes: new Map(),
      lightcones: new Map(),
      relicSets: new Map(),
      relics: [],
      userCharacters: [],
    };

    const user = new User(
      honkaiStarRailUser.uid,
      honkaiStarRailUser.achievementCount,
      honkaiStarRailUser.icon.icon.url,
      honkaiStarRailUser.level,
      honkaiStarRailUser.nickname,
      honkaiStarRailUser.signature,
    );

    [
      ...honkaiStarRailUser.supportCharacters,
      ...honkaiStarRailUser.starfaringCompanions,
    ].forEach((character) =>
      this.collectUserCharacter(character, honkaiStarRailUser.uid, accumulator),
    );

    return {
      user,
      characters: [...accumulator.characters.values()],
      eidolons: [...accumulator.eidolons.values()],
      skillTreeNodes: [...accumulator.skillTreeNodes.values()],
      lightcones: [...accumulator.lightcones.values()],
      relicSets: [...accumulator.relicSets.values()],
      relics: accumulator.relics,
      userCharacters: accumulator.userCharacters,
    };
  }

  private static collectUserCharacter(
    userCharacterDto: CharacterDto,
    uid: number,
    accumulator: FullUserInfoAccumulator,
  ): void {
    const userCharacterId = crypto.randomUUID();

    this.collectCharacter(userCharacterDto, accumulator);

    accumulator.relics.push(
      ...userCharacterDto.relics.map((relic) =>
        this.collectRelic(relic, userCharacterId, accumulator),
      ),
    );

    const userLightcone = userCharacterDto.lightCone
      ? this.collectUserLightcone(
          userCharacterDto.lightCone,
          userCharacterId,
          accumulator,
        )
      : null;

    accumulator.userCharacters.push(
      new UserCharacter(
        userCharacterId,
        userCharacterDto.characterData.id,
        uid,
        userLightcone,
        Object.values(userCharacterDto.stats.overallStats.list).map(
          (statData) =>
            this.toDomainStatData(statData, statType.characterFinalStat),
        ),
        userCharacterDto.level,
        userCharacterDto.ascension,
        userCharacterDto.eidolons,
        userCharacterDto.skillTreeNodes.map((skillTreeNode) =>
          this.toDomainUserCharacterSkillTreeNode(skillTreeNode),
        ),
        userCharacterDto.costume?.name ?? undefined,
      ),
    );
  }

  private static collectCharacter(
    userCharacterDto: CharacterDto,
    accumulator: FullUserInfoAccumulator,
  ): void {
    const characterDataDto = userCharacterDto.characterData;

    userCharacterDto.skillTreeNodes.forEach((skillTreeNode) =>
      this.collectSkillTreeNode(
        skillTreeNode,
        characterDataDto.id,
        accumulator,
      ),
    );

    characterDataDto.eidolons.forEach((eidolon) =>
      this.collectEidolon(eidolon, characterDataDto.id, accumulator),
    );

    if (accumulator.characters.has(characterDataDto.id)) {
      return;
    }

    accumulator.characters.set(
      characterDataDto.id,
      new Character(
        characterDataDto.id,
        characterDataDto.name.getAsFormattedText("en").text,
        characterDataDto.splashImage.url,
        characterDataDto.stars,
        characterDataDto.sideIcon.url,
        this.toDomainPath(characterDataDto.path),
        this.toDomainCombatType(characterDataDto.combatType),
        userCharacterDto.basicStats.map((baseStat) =>
          this.toDomainStatData(baseStat, statType.characterMainStat),
        ),
      ),
    );
  }

  private static collectSkillTreeNode(
    leveledSkillTreeNodeDto: LeveledSkillTreeNodeDto,
    characterId: number,
    accumulator: FullUserInfoAccumulator,
  ): void {
    if (accumulator.skillTreeNodes.has(leveledSkillTreeNodeDto.id)) {
      return;
    }

    accumulator.skillTreeNodes.set(
      leveledSkillTreeNodeDto.id,
      new SkillTreeNode(
        leveledSkillTreeNodeDto.id,
        leveledSkillTreeNodeDto.previousNodeId,
        leveledSkillTreeNodeDto.icon.url,
        leveledSkillTreeNodeDto.stats.map((stat) =>
          this.toDomainStatData(stat, statType.characterTraceStat),
        ),
        0,
        characterId,
      ),
    );
  }

  private static collectEidolon(
    eidolonDto: EidolonDto,
    characterId: number,
    accumulator: FullUserInfoAccumulator,
  ): void {
    if (accumulator.eidolons.has(eidolonDto.id)) {
      return;
    }

    accumulator.eidolons.set(
      eidolonDto.id,
      new Eidolon(
        eidolonDto.id,
        eidolonDto.rank,
        eidolonDto.name.getAsFormattedText("en").text,
        eidolonDto.icon.url,
        characterId,
      ),
    );
  }

  private static collectUserLightcone(
    lightconeDto: LightconeDto,
    userCharacterId: string,
    accumulator: FullUserInfoAccumulator,
  ): UserLightcone {
    this.collectLightcone(lightconeDto, accumulator);

    return new UserLightcone(
      crypto.randomUUID(),
      lightconeDto.level,
      lightconeDto.superimposition.level,
      lightconeDto.ascension,
      lightconeDto.lightConeData.id,
      userCharacterId,
    );
  }

  private static collectLightcone(
    lightconeDto: LightconeDto,
    accumulator: FullUserInfoAccumulator,
  ): void {
    const lightconeDataDto = lightconeDto.lightConeData;

    if (accumulator.lightcones.has(lightconeDataDto.id)) {
      return;
    }

    accumulator.lightcones.set(
      lightconeDataDto.id,
      new Lightcone(
        lightconeDataDto.id,
        lightconeDataDto.name.getAsFormattedText("en").text,
        this.toDomainPath(lightconeDataDto.path),
        lightconeDataDto.stars,
        lightconeDataDto.cardImage.url,
        [
          ...lightconeDto.basicStats.map((lightconeBaseStat) =>
            this.toDomainStatData(
              lightconeBaseStat,
              statType.lightconeBaseStat,
            ),
          ),
          ...lightconeDto.extraStats.map((lightconeExtraStat) =>
            this.toDomainStatData(
              lightconeExtraStat,
              statType.lightconeEffectStat,
            ),
          ),
        ],
      ),
    );
  }

  private static collectRelic(
    relicDto: RelicDto,
    userCharacterId: string,
    accumulator: FullUserInfoAccumulator,
  ): Relic {
    this.collectRelicSet(relicDto.relicData.set, accumulator);

    return new Relic(
      crypto.randomUUID(),
      [
        this.toDomainStatData(relicDto.mainStat, statType.relicMainStat),
        ...relicDto.subStats.map((stat) =>
          this.toDomainStatData(stat, statType.relicSubStat),
        ),
      ],
      relicDto.relicData.set.id,
      userCharacterId,
      relicPartMap[relicDto.relicData.type.id],
      relicDto.relicData.icon.url,
    );
  }

  private static collectRelicSet(
    relicSetDto: RelicSetDto,
    accumulator: FullUserInfoAccumulator,
  ): void {
    if (accumulator.relicSets.has(relicSetDto.id)) {
      return;
    }

    const statsData: StatData[] = [];

    relicSetDto.setBonus.forEach((setBonus) => {
      const relicSetStatType =
        setBonus.needCount === 4
          ? statType.relicSetFourPieceStat
          : statType.relicSetTwoPieceStat;

      statsData.push(
        ...setBonus.stats.map((stat) =>
          this.toDomainStatData(stat, relicSetStatType),
        ),
      );
    });

    accumulator.relicSets.set(
      relicSetDto.id,
      new RelicSet(
        relicSetDto.id,
        relicSetDto.name.getAsFormattedText("en").text,
        relicSetDto.icon.url,
        statsData,
      ),
    );
  }

  static toDomainCombatType(combatTypeDto: CombatTypeDto): CombatType {
    return new CombatType(
      combatTypeDto.id,
      combatTypeDto.name.getAsFormattedText("en").text,
      combatTypeDto.icon.url,
    );
  }

  static toDomainPath(pathDto: PathDto): Path {
    return new Path(
      pathDto.id,
      pathDto.name.getAsFormattedText("en").text,
      pathDto.icon.url,
    );
  }

  static toDomainStatData(
    statPropertyValueDto: StatPropertyValueDto,
    statType: StatType,
  ): StatData {
    return new StatData(
      crypto.randomUUID(),
      statPropertyValueDto.statPropery
        ? this.toDomainStat(statPropertyValueDto.statPropery)
        : null,
      statPropertyValueDto.value,
      statPropertyValueDto.isPercent,
      statPropertyValueDto.type,
      statType,
    );
  }

  static toDomainStat(statPropertyDto: StatPropertyDto): Stat {
    return new Stat(
      crypto.randomUUID(),
      statPropertyDto.type,
      statPropertyDto.name.getAsFormattedText("en").text,
      statPropertyDto.icon.url,
    );
  }

  static toDomainUserCharacterSkillTreeNode(
    leveledSkillTreeNodeDto: LeveledSkillTreeNodeDto,
  ): UserCharacterSkillTreeNode {
    return new UserCharacterSkillTreeNode(
      crypto.randomUUID(),
      leveledSkillTreeNodeDto.level.value,
      leveledSkillTreeNodeDto.id,
    );
  }
}
