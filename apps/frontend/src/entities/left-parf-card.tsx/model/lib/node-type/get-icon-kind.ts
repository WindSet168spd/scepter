import { IconKind } from "./node-type.types";

export function getIconKind(iconUrl: string): IconKind {
  if (iconUrl.includes("SkillTree")) {
    return IconKind.SkillTree;
  }

  if (iconUrl.includes("Servant")) {
    return IconKind.Servant;
  }

  if (iconUrl.includes("Elation")) {
    return IconKind.Elation;
  }

  return IconKind.Unknown;
}
