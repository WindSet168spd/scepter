import { StatData } from "./stat-data";

export class RelicSet {
  constructor(
    public id: number,
    public name: string,
    public relicSetIconUrl: string,
    public statsData: StatData[],
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
  ) {}
}
