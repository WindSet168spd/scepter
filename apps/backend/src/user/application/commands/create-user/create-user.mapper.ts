import {
  Character as CharacterDto,
  CombatType as CombatTypeDto,
  Eidolon as EidolonDto,
  Lightcone as LightconeDto,
  Path as PathDto,
  Relic as RelicDto,
  RelicSet as RelicSetDto,
  SkillTreeNode as SkillTreeNodeDto,
  Stat as StatDto,
  StatData as StatDataDto,
  UserCharacter as UserCharacterDto,
  UserCharacterSkillTreeNode as UserCharacterSkillTreeNodeDto,
  UserLightcone as UserLightconeDto,
} from "@scepter/domains";
import { FullUserInfoDto } from "src/user/domain/dtos/full-user-info.dto";
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
import { UserCharacter } from "src/user/domain/entities/user-character";
import { UserCharacterSkillTreeNode } from "src/user/domain/entities/user-character-skill-tree-node";
import { UserLightcone } from "src/user/domain/entities/user-lightconde";
import { UserAggregateDto } from "src/user/infrastructure/services/honkai-star-rail-data-provider/dto/user-aggregate.dto";

export class CreateUserMapper {
  static toFullUserInfo(userAggregate: UserAggregateDto): FullUserInfoDto {
    const { user } = userAggregate;

    return {
      uid: user.uid,
      achievementCount: user.achievementCount,
      icon: user.icon,
      level: user.level,
      nickname: user.nickname,
      signature: user.signature,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      userCharacters: userAggregate.userCharacters.map((userCharacter) =>
        this.toUserCharacter(userCharacter, userAggregate),
      ),
    };
  }

  private static toUserCharacter(
    userCharacter: UserCharacter,
    userAggregate: UserAggregateDto,
  ): UserCharacterDto {
    const character = userAggregate.characters.find(
      (aggregatedCharacter) =>
        aggregatedCharacter.id === userCharacter.characterId,
    );

    return {
      id: userCharacter.id,
      costume: userCharacter.costume,
      level: userCharacter.level,
      ascension: userCharacter.ascension,
      eidolons: userCharacter.eidolons,
      createdAt: userCharacter.createdAt,
      updatedAt: userCharacter.updatedAt,
      character: character ? this.toCharacter(character, userAggregate) : null,
      userLightcone: userCharacter.userLightcone
        ? this.toUserLightcone(userCharacter.userLightcone, userAggregate)
        : null,
      statsData: userCharacter.statsData.map((statData) =>
        this.toStatData(statData),
      ),
      relics: userAggregate.relics
        .filter((relic) => relic.userCharacterId === userCharacter.id)
        .map((relic) => this.toRelic(relic, userAggregate)),
      skillTreeNodes: userCharacter.skillTreeNodes.map((skillTreeNode) =>
        this.toUserCharacterSkillTreeNode(skillTreeNode, userAggregate),
      ),
    };
  }

  private static toCharacter(
    character: Character,
    userAggregate: UserAggregateDto,
  ): CharacterDto {
    return {
      id: character.id,
      name: character.name,
      splashArtUrl: character.splashArtUrl,
      stars: character.stars,
      iconUrl: character.iconUrl,
      createdAt: character.createdAt,
      updatedAt: character.updatedAt,
      path: this.toPath(character.path),
      combatType: this.toCombatType(character.combatType),
      baseStats: character.baseStats.map((baseStat) =>
        this.toStatData(baseStat),
      ),
      eidolons: userAggregate.eidolons
        .filter((eidolon) => eidolon.characterId === character.id)
        .map((eidolon) => this.toEidolon(eidolon)),
      skillTreeNodes: userAggregate.skillTreeNodes
        .filter((skillTreeNode) => skillTreeNode.characterId === character.id)
        .map((skillTreeNode) => this.toSkillTreeNode(skillTreeNode)),
    };
  }

  private static toUserLightcone(
    userLightcone: UserLightcone,
    userAggregate: UserAggregateDto,
  ): UserLightconeDto {
    const lightcone = userAggregate.lightcones.find(
      (aggregatedLightcone) =>
        aggregatedLightcone.id === userLightcone.lightconeId,
    );

    return {
      id: userLightcone.id,
      lightconeLevel: userLightcone.lightconeLevel,
      lightconeSuperimposition: userLightcone.lightconeSuperimposition,
      ascension: userLightcone.ascension,
      createdAt: userLightcone.createdAt,
      updatedAt: userLightcone.updatedAt,
      lightcone: lightcone ? this.toLightcone(lightcone) : null,
    };
  }

  private static toLightcone(lightcone: Lightcone): LightconeDto {
    return {
      id: lightcone.id,
      name: lightcone.name,
      stars: lightcone.stars,
      imageUrl: lightcone.imageUrl,
      createdAt: lightcone.createdAt,
      updatedAt: lightcone.updatedAt,
      path: this.toPath(lightcone.path),
      statsData: lightcone.statsData.map((statData) =>
        this.toStatData(statData),
      ),
    };
  }

  private static toRelic(
    relic: Relic,
    userAggregate: UserAggregateDto,
  ): RelicDto {
    const relicSet = userAggregate.relicSets.find(
      (aggregatedRelicSet) => aggregatedRelicSet.id === relic.relicSetId,
    );

    return {
      id: relic.id,
      relicPart: relic.relicPart,
      relicIconUrl: relic.relicIconUrl,
      createdAt: relic.createdAt,
      updatedAt: relic.updatedAt,
      relicSet: relicSet ? this.toRelicSet(relicSet) : null,
      statsData: relic.statsData.map((statData) => this.toStatData(statData)),
    };
  }

  private static toRelicSet(relicSet: RelicSet): RelicSetDto {
    return {
      id: relicSet.id,
      name: relicSet.name,
      relicSetIconUrl: relicSet.relicSetIconUrl,
      createdAt: relicSet.createdAt,
      updatedAt: relicSet.updatedAt,
      stats: relicSet.statsData.map((statData) => this.toStatData(statData)),
    };
  }

  private static toUserCharacterSkillTreeNode(
    userCharacterSkillTreeNode: UserCharacterSkillTreeNode,
    userAggregate: UserAggregateDto,
  ): UserCharacterSkillTreeNodeDto {
    const skillTreeNode = userAggregate.skillTreeNodes.find(
      (aggregatedSkillTreeNode) =>
        aggregatedSkillTreeNode.id ===
        userCharacterSkillTreeNode.skillTreeNodeId,
    );

    return {
      id: userCharacterSkillTreeNode.id,
      level: userCharacterSkillTreeNode.level,
      createdAt: userCharacterSkillTreeNode.createdAt,
      updatedAt: userCharacterSkillTreeNode.updatedAt,
      skillTreeNode: skillTreeNode ? this.toSkillTreeNode(skillTreeNode) : null,
    };
  }

  private static toSkillTreeNode(
    skillTreeNode: SkillTreeNode,
  ): SkillTreeNodeDto {
    const [statData] = skillTreeNode.statData;

    return {
      id: skillTreeNode.id,
      parentSkillTreeNodeId: skillTreeNode.parentSkillTreeNodeId,
      iconUrl: skillTreeNode.iconUrl,
      skillTreeNodeType: skillTreeNode.skillTreeNodeType,
      createdAt: skillTreeNode.createdAt,
      updatedAt: skillTreeNode.updatedAt,
      statData: statData ? this.toStatData(statData) : null,
    };
  }

  private static toEidolon(eidolon: Eidolon): EidolonDto {
    return {
      id: eidolon.id,
      order: eidolon.order,
      name: eidolon.name,
      iconUrl: eidolon.iconUrl,
      createdAt: eidolon.createdAt,
      updatedAt: eidolon.updatedAt,
    };
  }

  private static toStatData(statData: StatData): StatDataDto {
    return {
      id: statData.id,
      value: statData.value,
      isPercent: statData.isPercent,
      attribute: statData.attribute,
      type: statData.type,
      createdAt: statData.createdAt,
      updatedAt: statData.updatedAt,
      stat: statData.stat ? this.toStat(statData.stat) : null,
    };
  }

  private static toStat(stat: Stat): StatDto {
    return {
      id: stat.id,
      type: stat.type,
      name: stat.name,
      iconUrl: stat.iconUrl,
      createdAt: stat.createdAt,
      updatedAt: stat.updatedAt,
    };
  }

  private static toPath(path: Path): PathDto {
    return {
      id: path.id,
      name: path.name,
      iconUrl: path.iconUrl,
      createdAt: path.createdAt,
      updatedAt: path.updatedAt,
    };
  }

  private static toCombatType(combatType: CombatType): CombatTypeDto {
    return {
      id: combatType.id,
      name: combatType.name,
      iconUrl: combatType.iconUrl,
      createdAt: combatType.createdAt,
      updatedAt: combatType.updatedAt,
    };
  }
}
