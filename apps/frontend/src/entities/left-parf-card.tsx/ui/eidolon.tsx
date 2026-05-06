"use client";

import Image from "next/image";
import { Eidolon } from "../../../../../../packages/domains/src/eidolon";
import { Ban } from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface EidolonColumProps {
  eidolon?: Eidolon | null;
  activatedEidolons: number;
}

const EidolonUI = ({ eidolon, activatedEidolons }: EidolonColumProps) => {
  if (!eidolon) {
    return;
  }

  const isActivated = (): boolean => {
    return eidolon.order <= activatedEidolons;
  };

  return (
    <div
      className={cn(
        "mt-1 rounded-full aspect-square object-cover bg-black border-2 border-blue-600 relative overflow-hidden size-12",
        isActivated() && "border-green-300",
      )}
    >
      <Image
        src={eidolon ? eidolon.iconUrl : ""}
        className={isActivated() ? "" : "opacity-50"}
        width={48}
        height={48}
        style={{ width: "auto", height: "auto" }}
        alt="eidolon icon"
      />

      {!isActivated() && (
        <div className="absolute inset-0 flex items-center justify-center rounded-full z-10">
          <Ban className="size-8" color="white" />
        </div>
      )}
    </div>
  );
};

export default EidolonUI;
