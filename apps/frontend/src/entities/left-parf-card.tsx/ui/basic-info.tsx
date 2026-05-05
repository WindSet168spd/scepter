import Image from "next/image";
import { Character } from "../../../../../../packages/domains/src/character";
import { pngToWebp, yattaHostConvert } from "@/shared/lib/asset-url-converter";

interface BasicInfoProps {
  level: number;
  character?: Character | null;
}
const BasicInfo = ({ level, character }: BasicInfoProps) => {
  return (
    <div className="flex flex-col gap-3 m-1 text-white">
      <p>{character?.name}</p>

      <p>Lvl. {level}/80</p>

      <div className="flex gap-2">
        <Image
          width={35}
          height={35}
          src={pngToWebp(character?.path?.iconUrl)}
          alt="element"
        />
        <Image
          width={35}
          height={35}
          src={yattaHostConvert(character?.combatType?.iconUrl)}
          alt="element"
        />
      </div>
    </div>
  );
};

export default BasicInfo;
