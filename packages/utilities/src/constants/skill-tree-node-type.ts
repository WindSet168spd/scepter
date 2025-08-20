export const skillTreeNodeType = {
  basicAtack: 0,
  skill: 1,
  ultimate: 2,
  stat: 3,
  technique: 4,
  talent: 5,
  servantSkill: 6,
  servantTalent: 7,
} as const;
export type SkillTreeNodeType =
  (typeof skillTreeNodeType)[keyof typeof skillTreeNodeType];
