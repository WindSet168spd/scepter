import { CombatType } from "./combat-type";
import { Path } from "./path";
import { StatData } from "./stat-data";

export class Character {
  constructor(
    public readonly id: number,
    public name: string,
    public splashArtUrl: string,
    public stars: number,
    public iconUrl: string,
    public path: Path,
    public combatType: CombatType,
    public baseStats: StatData[],
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
  ) {}
}
