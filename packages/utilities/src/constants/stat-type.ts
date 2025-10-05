export const statType = {
  characterMainStat: 0,
  relicMainStat: 1,
  relicSubStat: 2,
  lightconeBaseStat: 3,
  characterTraceStat: 4,
  relicSetTwoPieceStat: 5,
  relicSetFourPieceStat: 6,
  lightconeEffectStat: 7,
  characterFinalStat: 8,
} as const;
export type StatType = (typeof statType)[keyof typeof statType];
