export type relicStat = {
  name: string;
  value: number;
};

export type scepterRelic = {
  set: string;
  type: string;
  level: number;
  image: string;
  mainStat: relicStat;
  subStats: relicStat[];
};

export default interface ScepterChar {
  name: string;
  splashArt: string;
  path: string;
  ascension: number;
  level: number;
  eidolons: number;
  lightCone?: {
    name: string;
    level: number;
    imgUrl: string;
  };

  baseStats: {
    baseHP: number;
    baseATK: number;
    baseDEF: number;
    baseSPD: number;
  };

  // Maybe setup for the future
  // deltaStats: {
  //   HPDelta: number;
  //   ATKDelta: number;
  //   DEFDelta: number;
  //   SPDDelta: number;
  // };
  //
  // multStats: {
  //   HPRatio: number;
  //   ATKRatio: number;
  //   DEFRation: number;
  //   SPDRatio: number;
  // };

  finalStats: {
    finalHP: number;
    finalATK: number;
    finalDEF: number;
    finalSPD: number;
    critRate: number;
    critDmg: number;
    effectRes: number;
    ehr: number;
    breakEffect: number;
    lightningDMGBonus: number;
    windDMGBonus: number;
    iceDMGBonus: number;
    fireDMGBonus: number;
    physDMGBonus: number;
    imgDMGBonus: number;
    quantumDMGBonus: number;
  };

  relics: scepterRelic[];
}
