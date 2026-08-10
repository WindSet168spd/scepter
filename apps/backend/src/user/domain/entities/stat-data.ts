import { StatType } from "@scepter/utilities";
import { Stat } from "./stat";

export class StatData {
  constructor(
    public readonly id: string,
    public stat: Stat | null,
    public value: number,
    public isPercent: boolean,
    public attribute: string,
    public type: StatType,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
  ) {}
}
