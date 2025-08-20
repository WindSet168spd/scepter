import { StatType } from "@scepter/utilities";
import { Stat } from "src/stat/domain/stat";

export class StatData {
  id: number;
  stat?: Stat | null;
  value: number;
  isPercent: boolean;
  type: StatType;
  createdAt: Date;
  updatedAt: Date;
}
