"use client";

import Image from "next/image";
import { Eidolon } from "../../../../../../packages/domains/src/eidolon";
import { pngToWebp } from "@/shared/lib/asset-url-converter";
import { Ban, Lock } from "lucide-react";

interface EidolonColumProps {
  eidolon?: Eidolon | null;
}

const EidolonColumn = ({ eidolon }: EidolonColumProps) => {
  return (
    <div className="mt-1 rounded-full aspect-square object-cover bg-black border-2 border-blue-600 relative overflow-hidden size-12">
      <Image
        src={eidolon ? pngToWebp(eidolon.iconUrl) : ""}
        className="opacity-70"
        width={48}
        height={48}
        alt="eidolon icon"
      />

      <div className="absolute inset-0 flex items-center justify-center rounded-full z-10">
        <Ban className="size-8" color="white" />
      </div>
    </div>
  );
};

export default EidolonColumn;
