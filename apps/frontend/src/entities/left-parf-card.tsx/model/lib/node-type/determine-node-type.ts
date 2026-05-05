import { SkillTreeNode } from "../../../../../../../../packages/domains/src/skill-tree-node";
import { NodeType } from "../../types/skill-node";
import { getIconKind } from "./get-icon-kind";
import { nodeTypeRules } from "./node-type.rules";

export function determineNodeType(
  treeNode?: SkillTreeNode | null,
  path?: string,
): NodeType {
  if (!path || !treeNode || treeNode.statData) {
    return NodeType.STAT;
  }

  const iconKind = getIconKind(treeNode.iconUrl);

  const match = nodeTypeRules.find((rule) => rule.match({ path, iconKind }));

  return match?.result ?? NodeType.SKILL;
}
