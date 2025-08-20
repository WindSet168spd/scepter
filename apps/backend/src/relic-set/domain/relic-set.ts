import { StatData } from "src/stat-data/domain/stat-data";

export class RelicSet {
  id: number;
  name: string;
  stats?: StatData[] | null;
  relicSetIconUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
