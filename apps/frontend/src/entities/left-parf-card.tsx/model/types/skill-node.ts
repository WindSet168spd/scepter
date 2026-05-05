export enum NodeType {
  SKILL,
  ASCENSION,
  STAT,
  MEMO,
  ELATION,
}

export type SkillNode = {
  id: number;
  iconUrl: string;
  parentId?: number | null;
  child?: SkillNode;
  level: number;
  type: NodeType;
};
