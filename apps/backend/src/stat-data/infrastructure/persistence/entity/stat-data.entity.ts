import { StatType } from "@scepter/utilities";
import { CharacterEntity } from "src/character/infrastructure/persistence/entity/character.entity";
import { LightconeEntity } from "src/lightcone/infrastructure/persistence/entity/lightcone.entity";
import { RelicSetEntity } from "src/relic-set/infrastructure/persistence/entity/relic-set.entity";
import { RelicEntity } from "src/relic/infrastructure/persistence/entity/relic.entity";
import { SkillTreeNodeEntity } from "src/skill-tree-node/infrastructure/persistence/entity/skill-tree-node.entity";
import { StatEntity } from "src/stat/infrastructure/persistence/entity/stat.entity";
import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";

@Entity({ name: "stat_data" })
export class StatDataEntity {
  @PrimaryColumn()
  id: number;

  @Column({ name: "is_percent", type: "boolean" })
  isPercent: boolean;

  @Column({ type: "decimal", precision: 6, scale: 3 })
  value: number;

  @Column({ type: "int2" })
  type: StatType;

  @ManyToOne(() => StatEntity)
  @JoinColumn({
    name: "stat_id",
    referencedColumnName: "id",
  })
  stat?: StatEntity | null;

  @ManyToMany(() => RelicSetEntity, (relicSet) => relicSet.statsData)
  relicSets?: RelicSetEntity[];

  @ManyToMany(() => LightconeEntity, (lightcone) => lightcone.statsData)
  lightcones?: LightconeEntity[];

  @ManyToMany(() => RelicEntity, (relic) => relic.statsData)
  relics?: RelicEntity[];

  @ManyToMany(() => CharacterEntity, (character) => character.statsData)
  characters?: CharacterEntity[];

  @OneToOne(
    () => SkillTreeNodeEntity,
    (skillTreeNode) => skillTreeNode.statData,
  )
  skillTreeNode?: SkillTreeNodeEntity;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "update_at" })
  updatedAt: Date;
}
