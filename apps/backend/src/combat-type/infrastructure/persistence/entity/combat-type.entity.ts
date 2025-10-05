import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "combat_type" })
export class CombatTypeEntity {
  @PrimaryColumn({ type: "varchar", length: 40 })
  id: string;

  @Column({ type: "varchar", length: 40 })
  name: string;

  @Column({ type: "text", name: "icon_url" })
  iconUrl: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "update_at" })
  updatedAt: Date;
}
