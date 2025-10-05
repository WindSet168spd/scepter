import { StatType } from "@scepter/utilities";
import { Stat } from "./stat";

export class StatData {
  id: string;
  stat?: Stat | null;
  value: number;
  isPercent: boolean;
  attribute: string;
  type: StatType;
  createdAt: Date;
  updatedAt: Date;
}
