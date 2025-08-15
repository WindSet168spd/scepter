import { RelicSet } from "src/relic-set/domain/relic-set";
import { StatData } from "src/stat-data/domain/stat-data";
import { RelicPart } from "@scepter/utilities";

export class Relic {
  id: number;
  statsData?: StatData[] | null;
  relicSet?: RelicSet | null;
  relicPart: RelicPart;
  createdAt: Date;
  updatedAt: Date;
}
