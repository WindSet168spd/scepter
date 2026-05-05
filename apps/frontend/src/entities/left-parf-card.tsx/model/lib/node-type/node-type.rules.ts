import { NodeType } from "../../types/skill-node";
import { IconKind } from "./node-type.types";

type Rule = {
  match: (ctx: { path: string; iconKind: IconKind }) => boolean;
  result: NodeType;
};

export const nodeTypeRules: Rule[] = [
  {
    match: ({ iconKind }) => iconKind === IconKind.SkillTree,
    result: NodeType.ASCENSION,
  },
  {
    match: ({ path, iconKind }) =>
      path === "Remembrance" && iconKind === IconKind.Servant,
    result: NodeType.MEMO,
  },
  {
    match: ({ path, iconKind }) =>
      path === "Elation" && iconKind === IconKind.Elation,
    result: NodeType.ELATION,
  },
];
