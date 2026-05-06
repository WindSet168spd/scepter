import { SkillTreeNode } from "../../../../../../../packages/domains/src/skill-tree-node";
import { UserCharacterSkillTreeNode } from "../../../../../../../packages/domains/src/user-character-skill-tree-node";
import { NodeType, SkillNode } from "../types/skill-node";
import { determineNodeType } from "./node-type/determine-node-type";

function buildSkillChains(
  levelTree?: UserCharacterSkillTreeNode[],
  treeNodes?: SkillTreeNode[] | null,
  path?: string,
): SkillNode[] {
  if (!treeNodes || !levelTree) {
    return [];
  }

  const tempNodeMap = new Map<number | null | undefined, SkillNode>();

  for (let i = 0; i < treeNodes.length; i++) {
    const newNode: SkillNode = {
      id: treeNodes[i].id,
      iconUrl: treeNodes[i].iconUrl,
      level: levelTree[i].level,
      parentId: treeNodes[i].parentSkillTreeNodeId,
      type: determineNodeType(treeNodes[i], path),
    };
    tempNodeMap.set(newNode.id, newNode);
  }

  for (const node of tempNodeMap.values()) {
    if (node.parentId !== null) {
      let parent = tempNodeMap.get(node.parentId);

      if (parent) {
        if (parent.child) {
          parent = parent.child;
        }
        parent.child = node;
      }
    }
  }

  const tempChains = Array.from(tempNodeMap.values()).filter(
    (node) => node.parentId === null,
  );

  const roots = tempChains.filter((n) => n.type !== NodeType.STAT);

  const orphans = tempChains.filter(
    (n) => n.parentId === null && n.type === NodeType.STAT,
  );

  if (orphans.length > 0) {
    const [first, ...rest] = orphans;

    let pointer = first;
    for (const node of rest) {
      pointer.child = node;
      pointer = node;
    }

    roots.push(first);
  }

  return roots;
}

export default buildSkillChains;
