import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "path" })
export class PathEntity {
  @PrimaryColumn()
  id: number;

  @Column({ type: "varchar", length: 40 })
  name: string;

  @Column({ type: "text", name: "icon_url" })
  iconUrl: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "update_at" })
  updatedAt: Date;
}
