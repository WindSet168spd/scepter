import { Path } from "src/path/domain/path";
import { StatData } from "src/stat-data/domain/stat-data";

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
