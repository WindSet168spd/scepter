export const relicPart = {
  head: 0,
  gloves: 1,
  body: 2,
  boots: 3,
  sphere: 4,
  rope: 5,
} as const;
export type RelicPart = (typeof relicPart)[keyof typeof relicPart];
