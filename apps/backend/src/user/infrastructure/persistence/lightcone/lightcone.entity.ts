import { PathEntity } from "../path/path.entity";
import { StatDataEntity } from "../stat-data/stat-data.entity";
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
  name: "lightcone",
})
export class LightconeEntity {
  @PrimaryColumn()
  id: number;

  @Column({ type: "varchar", length: 60 })
  name: string;

  @Column({ type: "text", name: "image_url" })
  imageUrl: string;

  @Column({ type: "int2" })
  stars: number;

  @ManyToOne(() => PathEntity)
  @JoinColumn({
    name: "path_id",
    referencedColumnName: "id",
  })
  path?: PathEntity | null;

  @JoinTable({
    name: "lightcone_stat_data",
    joinColumn: {
      name: "lightcone_id",
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
