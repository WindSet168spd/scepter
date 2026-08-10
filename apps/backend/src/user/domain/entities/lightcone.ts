import { Path } from "./path";
import { StatData } from "./stat-data";

export class Lightcone {
  constructor(
    public readonly id: number,
    public name: string,
    public path: Path,
    public stars: number,
    public imageUrl: string,
    public statsData: StatData[],
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
  ) {}
}
