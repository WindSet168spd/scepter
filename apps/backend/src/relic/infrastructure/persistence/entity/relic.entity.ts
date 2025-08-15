import { RelicPart } from "@scepter/utilities";
import { RelicSetEntity } from "src/relic-set/infrastructure/persistence/entity/relic-set.entity";
import { StatDataEntity } from "src/stat-data/infrastructure/persistence/entity/stat-data.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({
  name: "relic",
})
export class RelicEntity {
  @PrimaryColumn()
  id: number;

  @Column({ name: "relic_part", type: "int2" })
  relicPart: RelicPart;

  @ManyToOne(() => RelicSetEntity)
  @JoinColumn({
    name: "relic_set_id",
    referencedColumnName: "id",
  })
  relicSet?: RelicSetEntity | null;

  @JoinTable({
    name: "relic_stat_data",
    joinColumn: {
      name: "relic_id",
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
