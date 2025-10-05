import { StatDataEntity } from "src/stat-data/infrastructure/persistence/entity/stat-data.entity";
import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";

@Entity({ name: "relic_set" })
export class RelicSetEntity {
  @PrimaryColumn()
  id: number;

  @Column({ type: "varchar", length: 60 })
  name: string;

  @Column({ name: "relic_set_icon_url", type: "text" })
  relicSetIconUrl: string;

  @JoinTable({
    name: "relic_set_stat_data",
    joinColumn: {
      name: "relic_set_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "stat_data_id",
      referencedColumnName: "id",
    },
  })
  @ManyToMany(() => StatDataEntity, (statData) => statData.relicSets, {
    onDelete: "CASCADE",
  })
  statsData?: StatDataEntity[];

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "update_at" })
  updatedAt: Date;
}
