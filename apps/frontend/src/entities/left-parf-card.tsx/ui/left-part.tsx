"use client";

import Image from "next/image";
import { Character } from "../../../../../../packages/domains/src/character";
import EidolonColumn from "./eidolons";
import SkillTree from "./skill-tree";
import { UserCharacterSkillTreeNode } from "../../../../../../packages/domains/src/user-character-skill-tree-node";
import BasicInfo from "./basic-info";

interface LeftPartProps {
  character?: Character | null;
  userSkillTree?: UserCharacterSkillTreeNode[];
  level: number;
}

const LeftPart = ({ character, userSkillTree, level }: LeftPartProps) => {
  return (
    <div className="flex w-100 h-100 justify-between bg-blue-400">
      <div className="absolute overflow-hidden w-100 h-100 z-10">
        <Image
          src={character?.splashArtUrl ?? ""}
          className="object-cover object-center"
          fill
          alt="splash"
        />
      </div>

      <div className="flex flex-col z-20 justify-between m-1">
        <BasicInfo level={level} character={character} />

        <SkillTree
          skillTree={character?.skillTreeNodes}
          userSkillTree={userSkillTree}
          path={character?.path?.name}
        />
      </div>

      <div className="mt-5 w-15 z-20">
        {character?.eidolons?.map((eidolon) => {
          return <EidolonColumn eidolon={eidolon} key={eidolon.id} />;
        })}
      </div>
    </div>
  );
};

export default LeftPart;
