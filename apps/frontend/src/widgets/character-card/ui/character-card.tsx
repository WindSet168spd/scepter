"use client";

import { UserCharacter } from "../../../../../../packages/domains/src/user-character";
import RelicCard from "@/entities/relic/ui/relic-card";
import { Relic } from "../../../../../../packages/domains/src/relic";
import LeftPart from "@/entities/left-parf-card.tsx/ui/left-part";

interface props {
  character: UserCharacter;
}

const CharacterCard = ({ character }: props) => {
  const normaliseRelicArray = (relics?: Relic[]): (Relic | null)[] => {
    const normalisedRelics: (Relic | null)[] = Array<Relic | null>(6).fill(
      null,
    );

    relics?.forEach((relic) => {
      // eslint-disable-next-line curly
      if (relic.relicPart >= 0) normalisedRelics[relic.relicPart] = relic;
    });

    return normalisedRelics;
  };

  return (
    <div className="min-h-screen items-center justify-center p-6">
      <LeftPart
        character={character.character}
        userSkillTree={character.skillTreeNodes}
        level={character.level}
      />

      <div className="flex gap-2">
        {normaliseRelicArray(character.relics).map((relic, index) => {
          return <RelicCard relic={relic} key={index} />;
        })}
      </div>
    </div>
  );
};

export default CharacterCard;
