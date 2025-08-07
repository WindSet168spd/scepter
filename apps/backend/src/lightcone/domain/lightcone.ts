import { Path } from "src/path/domain/path";
import { StatData } from "src/stat-data/domain/stat-data";

export class Lightcone {
  id: number;
  name: string;
  path: Path;
  stars: number;
  imageUrl: string;
  stats: StatData;
}
