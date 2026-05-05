/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use-client";

import { StatData } from "../../../../../../packages/domains/src/stat-data";
import StatIcon from "@/shared/lib/stat-icon";
import Image from "next/image";

interface StatRowProps {
  stat: StatData;
  isMainStat?: boolean;
}

const StatRow = ({ stat, isMainStat = false }: StatRowProps) => {
  const formatStatValue = (value: number): string => {
    if (stat.attribute.includes("Delta")) {
      const formattedDelta = value.toFixed(0).toString();
      return formattedDelta;
    }

    const formatedPercentage = new Intl.NumberFormat("default", {
      style: "percent",
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(value);

    return formatedPercentage;
  };

  return (
    <div className="flex gap-2">
      <Image
        src={StatIcon[stat.attribute]}
        width={isMainStat ? 10 : 20}
        height={isMainStat ? 10 : 20}
        alt="stat icon"
        style={{ width: "auto" }}
        className="flex-shrink-0"
      />
      <p className="text-sm">{formatStatValue(stat.value)}</p>
    </div>
  );
};

export default StatRow;
