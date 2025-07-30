import { Controller, Get, Query } from "@nestjs/common";
import { AppService } from "./app.service";
import { Character, Relic, StarRail } from "starrail.js";
import ScepterChar, { relicStat, scepterRelic } from "./user.entity";

@Controller()
export class AppController {
  client: StarRail;

  constructor(private readonly appService: AppService) {
    this.client = new StarRail();
  }

  @Get()
  async getUser(@Query("uid") uid: number): Promise<ScepterChar[]> {
    const user = await this.client.fetchUser(uid);
    const allChars = [...user.supportCharacters, ...user.starfaringCompanions];
    const response = [];

    for (const char of allChars) {
      const newChar = this.createChar(char);
      response.push(newChar);
    }

    return response as ScepterChar[];
  }

  private createChar(char: Character): ScepterChar {
    return {
      name: char.characterData.name.toString(),
      splashArt: char.characterData.splashImage.url,
      path: char.characterData.path.name.toString(),
      ascension: char.ascension,
      level: char.level,
      eidolons: char.eidolons,
      lightCone: !char.lightCone
        ? null
        : {
            name: char.lightCone.lightConeData.name.toString(),
            level: char.lightCone.level,
            imgUrl: char.lightCone.lightConeData.cardImage.url,
          },

      baseStats: {
        baseHP: char.basicStats[2].value,
        baseATK: char.basicStats[1].value,
        baseDEF: char.basicStats[0].value,
        baseSPD: char.basicStats[3].value,
      },

      finalStats: {
        finalHP: char.stats.overallStats.maxHP.value,
        finalATK: char.stats.overallStats.attack.value,
        finalDEF: char.stats.overallStats.defense.value,
        finalSPD: char.stats.overallStats.speed.value,
        critRate: char.stats.overallStats.critRate.value,
        critDmg: char.stats.overallStats.critDamage.value,
        effectRes: char.stats.overallStats.effectResistance.value,
        ehr: char.stats.overallStats.effectHitRate.value,
        breakEffect: char.stats.overallStats.breakEffect.value,
        lightningDMGBonus: char.stats.overallStats.lightningDamageBonus.value,
        windDMGBonus: char.stats.overallStats.windDamageBonus.value,
        iceDMGBonus: char.stats.overallStats.iceDamageBonus.value,
        fireDMGBonus: char.stats.overallStats.fireDamageBonus.value,
        physDMGBonus: char.stats.overallStats.physicalDamageBonus.value,
        imgDMGBonus: char.stats.overallStats.imaginaryDamageBonus.value,
        quantumDMGBonus: char.stats.overallStats.quantumDamageBonus.value,
      },

      relics: this.getRelics(char.relics),
    };
  }

  // cringe to fix
  private getRelics(relics: Relic[]): scepterRelic[] {
    const allRelics = [];
    relics.forEach((relic) => {
      if (!relic) {
        allRelics.push(null);
      } else {
        const rel = {
          set: relic.relicData.set.name.toString(),
          type: relic.relicData.type.name.toString(),
          level: relic.level,
          image: relic.relicData.figureIcon.url,
          mainStat: relic.mainStat.value,
          subStats: this.getSubs(relic),
        };
        allRelics.push(rel);
      }
    });

    return allRelics as scepterRelic[];
  }

  // omega cringe to fix
  private getSubs(relic: Relic): relicStat[] {
    const allSubs = [];
    relic.subStats.forEach((sub) => {
      const getSub = {
        name: sub.statProperty.name.toString(),
        value: sub.value,
      };
      allSubs.push(getSub);
    });
    return allSubs as relicStat[];
  }
}
