"use client";

import Image from "next/image";
import { NodeType, SkillNode } from "../model/types/skill-node";
import { cn } from "@/shared/lib/utils";

interface SkillNodeUIProps {
  node?: SkillNode;
}

type SkillStyle = {
  icon: string;
  size: number;
  border: string;
};

const getStyle = (nodeType: NodeType): SkillStyle => {
  const style: SkillStyle = {
    icon: "",
    size: 0,
    border: "",
  };
  switch (nodeType) {
    case NodeType.STAT:
      style.border = "border-white bg-white size-8";
      style.icon = "invert";
      style.size = 20;
      break;

    case NodeType.MEMO:
      style.border = "border-[#8f84c2] bg-black";
      style.icon =
        "filter-[brightness(0%)_saturate(100%)_invert(50%)_sepia(51%)_saturate(495%)_hue-rotate(210deg)_brightness(100%)_contrast(100%)]";
      style.size = 48;
      break;

    case NodeType.ELATION:
      style.border = "border-[#f2a589] bg-black";
      style.icon =
        "filter-[brightness(0%)_saturate(100%)_invert(67%)_sepia(41%)_saturate(520%)_hue-rotate(325deg)_brightness(104%)_contrast(90%)]";
      style.size = 48;
      break;

    case NodeType.ASCENSION:
      style.border = "border-black bg-white";
      style.icon = "invert";
      style.size = 48;
      break;

    case NodeType.SKILL:
      style.border = "border-[#ebddc4] bg-black";
      style.icon =
        "filter-[brightness(0%)_saturate(100%)_invert(96%)_sepia(8%)_saturate(886%)_hue-rotate(327deg)_brightness(94%)_contrast(100%)]";
      style.size = 48;
      break;
  }
  return style;
};

const SkillNodeUI = ({ node }: SkillNodeUIProps) => {
  if (!node) {
    return;
  }
  const style = getStyle(node.type);
  return (
    <div className="flex gap-2">
      <div
        className={cn(
          "rounded-full aspect-square object-cover border-2 size-12 flex items-center justify-center",
          style.border,
        )}
      >
        <Image
          src={node.iconUrl}
          width={style.size}
          height={style.size}
          alt="skill-icon"
          className={style.icon}
        />
      </div>

      {node.child && (
        <div className="flex items-center">
          <SkillNodeUI node={node.child} />
        </div>
      )}
    </div>
  );
};

export default SkillNodeUI;
