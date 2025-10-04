import { User } from "src/user/domain/user";
import { StarRailUserDto } from "src/honkai-star-rail-api/dto/star-rail-user.dto";
import { OmitTimestamps } from "../honkai-star-rail-api.types";
import { UserCharacter } from "src/user-character/domain/user-character";
import { CharacterDto } from "../dto/character.dto";
import { Character } from "src/character/domain/character";
import { CombatTypeDto } from "../dto/combat-type.dto";
import { CombatType } from "src/combat-type/domain/combat-type";
import { PathDto } from "../dto/path.dto";
import { Path } from "src/path/domain/path";
import { EidolonDto } from "../dto/eidolon.dto";
import { Eidolon } from "src/eidolon/domain/eidolon";
import { StatPropertyValueDto } from "../dto/stat-property-value.dto";
import { StatData } from "src/stat-data/domain/stat-data";
import { statType, StatType } from "@scepter/utilities";
import { StatPropertyDto } from "../dto/stat-property.dto";
import { Stat } from "src/stat/domain/stat";
import { SkillTreeNodeDto } from "../dto/skill-tree-node.dto";
import { SkillTreeNode } from "src/skill-tree-node/domain/skill-tree-node";
import { LeveledSkillTreeNodeDto } from "../dto/leveled-skill-tree-node.dto";
import { UserCharacterSkillTreeNode } from "src/user-character-skill-tree-node/domain/user-character-skill-tree-node";
import { LightconeDto } from "../dto/lightcone.dto";
import { Lightcone } from "src/lightcone/domain/lightcone";
import { UserLightcone } from "src/user-lightcone/domain/user-lightconde";
import { Relic } from "src/relic/domain/relic";
import { RelicDto } from "../dto/relic.dto";
import { RelicSet } from "src/relic-set/domain/relic-set";
import { RelicSetDto } from "../dto/relic-set.dto";
import { relicPartMap } from "../honkai-star-rail-api.constants";

export class HonkaiStarRailApiMapper {
  static toDomainUser(
    honkaiStarRailUser: StarRailUserDto,
  ): OmitTimestamps<User> {
    const domainUser: OmitTimestamps<User> = {
      uid: honkaiStarRailUser.uid,
      achievementCount: honkaiStarRailUser.achievementCount,
      icon: honkaiStarRailUser.icon.icon.url,
      level: honkaiStarRailUser.level,
      nickname: honkaiStarRailUser.nickname,
      signature: honkaiStarRailUser.signature,
      userCharacters: [],
    };

    if (honkaiStarRailUser.supportCharacters.length > 0) {
      domainUser.userCharacters?.push(
        ...honkaiStarRailUser.supportCharacters.map((character) =>
          this.toDomainUserCharacter(character),
        ),
      );
    }

    if (honkaiStarRailUser.starfaringCompanions.length > 0) {
      domainUser.userCharacters?.push(
        ...honkaiStarRailUser.starfaringCompanions.map((character) =>
          this.toDomainUserCharacter(character),
        ),
      );
    }

    return domainUser;
  }

  static toDomainUserCharacter(
    userCharacterDto: CharacterDto,
  ): OmitTimestamps<UserCharacter> {
    const userCharacter: OmitTimestamps<UserCharacter> = {
      id: crypto.randomUUID(),
      level: userCharacterDto.level,
      ascension: userCharacterDto.ascension,
      character: this.toDomainCharacter(userCharacterDto),
      skillTreeNodes: userCharacterDto.skillTreeNodes.map((skillTreeNode) =>
        this.toDomainUserCharacterSkillTreeNode(skillTreeNode),
      ),
      relics: userCharacterDto.relics.map((relic) => this.toDomainRelic(relic)),
      statsData: Object.values(userCharacterDto.stats.overallStats.list).map(
        (statData) =>
          this.toDomainStatData(statData, statType.characterFinalStat),
      ),
    };

    if (userCharacterDto.costume?.name) {
      userCharacter.costume = userCharacterDto.costume.name;
    }

    if (userCharacterDto.lightCone) {
      userCharacter.userLightcone = this.toDomainUserLightcone(
        userCharacterDto.lightCone,
      );
    }

    userCharacterDto.skillTreeNodes.forEach((leveledSkillTreeNode) => {
      if (!leveledSkillTreeNode.stats[0]) {
        return;
      }

      const skillTreeNodeIndex =
        userCharacter.character?.skillTreeNodes?.findIndex(
          (skillTreeNode) => skillTreeNode.id === leveledSkillTreeNode.id,
        ) ?? -1;

      if (
        skillTreeNodeIndex !== -1 &&
        userCharacter?.character?.skillTreeNodes
      ) {
        userCharacter.character.skillTreeNodes[skillTreeNodeIndex].statData =
          this.toDomainStatData(
            leveledSkillTreeNode.stats[0],
            statType.characterTraceStat,
          );
      }
    });

    return userCharacter;
  }

  static toDomainCharacter(
    characterDto: CharacterDto,
  ): OmitTimestamps<Character> {
    const characterDataDto = characterDto.characterData;

    const character: OmitTimestamps<Character> = {
      id: characterDataDto.id,
      name: characterDataDto.name.getAsFormattedText("en").text,
      iconUrl: characterDataDto.sideIcon.url,
      splashArtUrl: characterDataDto.splashImage.url,
      stars: characterDataDto.stars,
      combatType: this.toDomainCombatType(characterDataDto.combatType),
      path: this.toDomainPath(characterDataDto.path),
      eidolons: characterDataDto.eidolons.map((eidolon) =>
        this.toDomainEidolon(eidolon),
      ),
      baseStats: characterDto.basicStats.map((baseStat) =>
        this.toDomainStatData(baseStat, statType.characterMainStat),
      ),
      skillTreeNodes: characterDto.skillTreeNodes.map((skillTreeNode) =>
        this.toDomainSkillTreeNode(skillTreeNode),
      ),
    };

    return character;
  }

  static toDomainCombatType(
    combatTypeDto: CombatTypeDto,
  ): OmitTimestamps<CombatType> {
    const combatType: OmitTimestamps<CombatType> = {
      iconUrl: combatTypeDto.icon.url,
      id: combatTypeDto.id,
      name: combatTypeDto.name.getAsFormattedText("en").text,
    };

    return combatType;
  }

  static toDomainPath(pathDto: PathDto): OmitTimestamps<Path> {
    const path: OmitTimestamps<Path> = {
      id: pathDto.id,
      name: pathDto.name.getAsFormattedText("en").text,
      iconUrl: pathDto.icon.url,
    };

    return path;
  }

  static toDomainEidolon(eidolonDto: EidolonDto): OmitTimestamps<Eidolon> {
    const eidolon: OmitTimestamps<Eidolon> = {
      id: eidolonDto.id,
      iconUrl: eidolonDto.icon.url,
      name: eidolonDto.name.getAsFormattedText("en").text,
      order: eidolonDto.rank,
    };

    return eidolon;
  }

  static toDomainStatData(
    statPropertyValueDto: StatPropertyValueDto,
    statType: StatType,
  ): OmitTimestamps<StatData> {
    const statData: OmitTimestamps<StatData> = {
      id: crypto.randomUUID(),
      value: statPropertyValueDto.value,
      attribute: statPropertyValueDto.type,
      type: statType,
      isPercent: statPropertyValueDto.isPercent,
    };

    if (statPropertyValueDto.statPropery) {
      statData.stat = this.toDomainStat(statPropertyValueDto.statPropery);
    }

    return statData;
  }

  static toDomainStat(statPropertyDto: StatPropertyDto): OmitTimestamps<Stat> {
    const stat: OmitTimestamps<Stat> = {
      id: crypto.randomUUID(),
      name: statPropertyDto.name.getAsFormattedText("en").text,
      type: statPropertyDto.type,
      iconUrl: statPropertyDto.icon.url,
    };

    return stat;
  }

  static toDomainSkillTreeNode(
    skillTreeNodeDto: SkillTreeNodeDto,
  ): OmitTimestamps<SkillTreeNode> {
    const skillTreeNode: OmitTimestamps<SkillTreeNode> = {
      id: skillTreeNodeDto.id,
      iconUrl: skillTreeNodeDto.icon.url,
      parentSkillTreeNodeId: skillTreeNodeDto.previousNodeId,
      skillTreeNodeType: 0,
    };

    return skillTreeNode;
  }

  static toDomainUserCharacterSkillTreeNode(
    leveledSkillTreeNodeDto: LeveledSkillTreeNodeDto,
  ): OmitTimestamps<UserCharacterSkillTreeNode> {
    const userCharacterSkillTreeNode: OmitTimestamps<UserCharacterSkillTreeNode> =
      {
        id: crypto.randomUUID(),
        level: leveledSkillTreeNodeDto.level.value,
        skillTreeNode: {
          id: leveledSkillTreeNodeDto.id,
        } as OmitTimestamps<SkillTreeNode>,
      };

    return userCharacterSkillTreeNode;
  }

  static toDomainUserLightcone(
    lightconeDto: LightconeDto,
  ): OmitTimestamps<UserLightcone> {
    const userLightcone: OmitTimestamps<UserLightcone> = {
      id: crypto.randomUUID(),
      lightconeLevel: lightconeDto.level,
      lightconeSuperimposition: lightconeDto.superimposition.level,
      ascension: lightconeDto.ascension,
      lightcone: this.toDomainLightcone(lightconeDto),
    };

    return userLightcone;
  }

  static toDomainLightcone(
    lightconeDto: LightconeDto,
  ): OmitTimestamps<Lightcone> {
    const lightcone: OmitTimestamps<Lightcone> = {
      id: lightconeDto.lightConeData.id,
      name: lightconeDto.lightConeData.name.getAsFormattedText("en").text,
      path: this.toDomainPath(lightconeDto.lightConeData.path),
      imageUrl: lightconeDto.lightConeData.cardImage.url,
      stars: lightconeDto.lightConeData.stars,
      statsData: [],
    };

    lightcone.statsData?.push(
      ...lightconeDto.basicStats.map((lightconeBaseStat) =>
        this.toDomainStatData(lightconeBaseStat, statType.lightconeBaseStat),
      ),
    );

    lightcone.statsData?.push(
      ...lightconeDto.extraStats.map((lightconeExtraStat) =>
        this.toDomainStatData(lightconeExtraStat, statType.lightconeEffectStat),
      ),
    );

    return lightcone;
  }

  static toDomainRelic(relicDto: RelicDto): OmitTimestamps<Relic> {
    const relic: OmitTimestamps<Relic> = {
      id: crypto.randomUUID(),
      relicSet: this.toDomainRelicSet(relicDto.relicData.set),
      relicPart: relicPartMap[relicDto.relicData.type.id],
      statsData: [],
    };

    relic.statsData?.push(
      this.toDomainStatData(relicDto.mainStat, statType.relicMainStat),
    );

    relic.statsData?.push(
      ...relicDto.subStats.map((stat) =>
        this.toDomainStatData(stat, statType.relicSubStat),
      ),
    );

    return relic;
  }

  static toDomainRelicSet(relicSetDto: RelicSetDto): OmitTimestamps<RelicSet> {
    const relicSet: OmitTimestamps<RelicSet> = {
      id: relicSetDto.id,
      name: relicSetDto.name.getAsFormattedText("en").text,
      relicSetIconUrl: relicSetDto.icon.url,
      stats: [],
    };

    relicSetDto.setBonus.forEach((setBonus) => {
      const relicSetStatType =
        setBonus.needCount === 4
          ? statType.relicSetFourPieceStat
          : statType.relicSetTwoPieceStat;
      relicSet.stats?.push(
        ...setBonus.stats.map((stat) =>
          this.toDomainStatData(stat, relicSetStatType),
        ),
      );
    });

    return relicSet;
  }
}
