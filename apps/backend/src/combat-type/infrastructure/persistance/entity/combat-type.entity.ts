import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({ name: "combat_type" })
export class CombatTypeEntity {
  @PrimaryColumn()
  id: number;

  @Column({ type: "varchar", length: 40 })
  name: string;

  @Column({ type: "text", name: "icon_url" })
  iconUrl: string;
}
