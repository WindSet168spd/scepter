import { StatType } from "@scepter/utilities";
import { CharacterEntity } from "../character/character.entity";
import { LightconeEntity } from "../lightcone/lightcone.entity";
import { RelicSetEntity } from "../relic-set/relic-set.entity";
import { RelicEntity } from "../relic/relic.entity";
import { SkillTreeNodeEntity } from "../skill-tree-node/skill-tree-node.entity";
import { StatEntity } from "../stat/stat.entity";
import { UserCharacterEntity } from "../user-character/user-character.entity";
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
  @PrimaryColumn({ type: "uuid" })
  id: string;

  @Column({ name: "is_percent", type: "boolean" })
  isPercent: boolean;

  @Column({ type: "decimal", precision: 6, scale: 3 })
  value: number;

  @Column({ type: "varchar", length: 40 })
  attribute: string;

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

  @ManyToMany(
    () => UserCharacterEntity,
    (userCharacter) => userCharacter.statsData,
  )
  userCharacters?: RelicEntity[];

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
