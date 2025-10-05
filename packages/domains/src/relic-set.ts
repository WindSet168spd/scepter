import { StatData } from "./stat-data";

export class RelicSet {
  id: number;
  name: string;
  stats?: StatData[] | null;
  relicSetIconUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
