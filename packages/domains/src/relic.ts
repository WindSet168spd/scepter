import { RelicSet } from "./relic-set";
import { StatData } from "./stat-data";
import { RelicPart } from "@scepter/utilities";

export class Relic {
  id: string;
  statsData?: StatData[] | null;
  relicSet?: RelicSet | null;
  relicPart: RelicPart;
  createdAt: Date;
  updatedAt: Date;
}
