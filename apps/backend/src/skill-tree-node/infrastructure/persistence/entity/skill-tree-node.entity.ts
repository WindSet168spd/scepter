import { SkillTreeNodeType } from "@scepter/utilities";
import { CharacterEntity } from "src/character/infrastructure/persistence/entity/character.entity";
import { StatDataEntity } from "src/stat-data/infrastructure/persistence/entity/stat-data.entity";
import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";

@Entity({ name: "skill_tree_node" })
export class SkillTreeNodeEntity {
  @PrimaryColumn()
  id: number;

  @Column({ type: "text", name: "icon_url" })
  iconUrl: string;

  @Column({ name: "skill_tree_node_type", type: "int2" })
  skillTreeNodeType: SkillTreeNodeType;

  @OneToOne(() => StatDataEntity, (statData) => statData.skillTreeNode, {
    nullable: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "stat_data_id", referencedColumnName: "id" })
  statData?: StatDataEntity | null;

  @ManyToOne(() => CharacterEntity, (character) => character.eidolons, {
    onDelete: "CASCADE",
  })
  character?: CharacterEntity | null;

  @ManyToOne(() => SkillTreeNodeEntity, {
    nullable: true,
    onDelete: "SET NULL",
  })
  @JoinColumn({ name: "parent_skill_tree_node_id", referencedColumnName: "id" })
  parentSkillTreeNode?: Partial<SkillTreeNodeEntity> | null;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "update_at" })
  updatedAt: Date;
}
