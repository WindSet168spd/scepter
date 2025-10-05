import { Path } from "./path";
import { StatData } from "./stat-data";

export class Lightcone {
  id: number;
  name: string;
  path?: Path | null;
  stars: number;
  imageUrl: string;
  statsData?: StatData[] | null;
  createdAt: Date;
  updatedAt: Date;
}
