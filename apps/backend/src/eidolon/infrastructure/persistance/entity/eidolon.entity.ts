import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity({ name: "eidolon" })
export class EidolonEntity {
  @PrimaryColumn()
  id: number;

  @Column({ type: "smallint" })
  order: number;

  @Column({ type: "varchar", length: 40 })
  name: string;

  @Column({ type: "text", name: "icon_url" })
  iconUrl: string;
}
