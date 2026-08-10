import { RelicPart } from "@scepter/utilities";
import { StatData } from "./stat-data";

export class Relic {
  constructor(
    public id: string,
    public statsData: StatData[],
    public relicSetId: number,
    public userCharacterId: string,
    public relicPart: RelicPart,
    public relicIconUrl: string,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
  ) {}
}
