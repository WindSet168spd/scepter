"use client";

import { useMemo } from "react";
import { SkillTreeNode } from "../../../../../../packages/domains/src/skill-tree-node";
import { UserCharacterSkillTreeNode } from "../../../../../../packages/domains/src/user-character-skill-tree-node";
import buildSkillChains from "../model/lib/skill-chains-builder";
import SkillNodeUI from "./skill-node";

interface SkillTreeProps {
  skillTree?: SkillTreeNode[] | null;
  userSkillTree?: UserCharacterSkillTreeNode[];
  path?: string;
}

const SkillTree = ({ skillTree, userSkillTree, path }: SkillTreeProps) => {
  const normalizedTree = useMemo(
    () => buildSkillChains(userSkillTree, skillTree, path),
    [userSkillTree, skillTree, path],
  );

  return (
    <div className="mt-1">
      <div className="flex m-1 gap-4 items-center">
        <SkillNodeUI node={normalizedTree[0]} />
        <SkillNodeUI node={normalizedTree.at(-1)} />
      </div>

      <div className="flex m-1 gap-2 items-center">
        <SkillNodeUI node={normalizedTree[1]} />
        <SkillNodeUI node={normalizedTree[5]} />
      </div>

      <div className="flex m-1 gap-2 items-center">
        <SkillNodeUI node={normalizedTree[2]} />
        <SkillNodeUI node={normalizedTree[6]} />
      </div>

      <div className="flex m-1 gap-2 items-center">
        <SkillNodeUI node={normalizedTree[3]} />
        <SkillNodeUI node={normalizedTree[7]} />
      </div>

      {path === "Remembrance" && (
        <div className="flex m-1 gap-2">
          <SkillNodeUI node={normalizedTree[8]} />
          <SkillNodeUI node={normalizedTree[9]} />
        </div>
      )}

      {path === "Elation" && (
        <div className="flex m-1 gap-2">
          <SkillNodeUI node={normalizedTree[8]} />
        </div>
      )}
    </div>
  );
};

export default SkillTree;
