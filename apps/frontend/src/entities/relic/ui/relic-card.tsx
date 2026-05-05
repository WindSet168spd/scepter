"use clinet";

import { yattaHostConvert } from "@/shared/lib/asset-url-converter";
import { Relic } from "../../../../../../packages/domains/src/relic";
import StatRow from "./stat-row";
import Image from "next/image";
import { BanIcon } from "lucide-react";

interface RelicCardProp {
  relic: Relic | null;
}

const RelicCard = ({ relic }: RelicCardProp) => {
  return (
    <div className="flex w-full ">
      {!relic ? (
        <div className="w-full items-center justify-center flex bg-gray-700 border-3 border-black">
          <BanIcon size={50} />
        </div>
      ) : (
        <div className="w-full relative items-center justify-center bg-indigo-500 text-white border-3 border-blue-950">
          <div className="absolute -bottom-2 ml-2 top-1/2 -translate-y-1/2 w-1/2 z-10">
            <Image
              src={yattaHostConvert(relic.relicSet?.relicSetIconUrl) || ""}
              fill
              alt="relic art"
            />
          </div>

          <div className="relative p-2 z-20">
            <div className="inline-flex -mb-20 h-1/12 text-center items-center justify-center rounded-lg px-2 py-2 bg-indigo-700 bg-opacity-20">
              <p className="text-sm">RV: 228%</p>
            </div>

            <div className="flex flex-col gap-2.5 pl-30 h-40">
              {relic.statsData?.slice(1).map((stat) => {
                return <StatRow stat={stat} key={stat.id} />;
              })}
            </div>
          </div>
          <div className="absolute bottom-2 left-2 inline-flex h-9 rounded-lg px-2 py-2 bg-indigo-700 bg-opacity-20">
            <StatRow stat={relic.statsData[0]} isMainStat />
          </div>
        </div>
      )}
    </div>
  );
};

export default RelicCard;
