import { SkillTreeNodeEntity } from "src/skill-tree-node/infrastructure/persistence/entity/skill-tree-node.entity";
import { UserCharacterEntity } from "src/user-character/infrastructure/persistence/entity/user-character.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({
  name: "user_character_skill_tree_node",
})
export class UserCharacterSkillTreeNodeEntity {
  @PrimaryColumn()
  id: number;

  @Column({ type: "int2" })
  level: number;

  @ManyToOne(() => UserCharacterEntity, (userCharacter) => userCharacter, {
    onDelete: "CASCADE",
  })
  @JoinColumn({
    name: "user_character_id",
    referencedColumnName: "id",
  })
  userCharacter?: UserCharacterEntity | null;

  @ManyToOne(() => SkillTreeNodeEntity, {
    onDelete: "CASCADE",
  })
  @JoinColumn({
    name: "skill_tree_node_id",
    referencedColumnName: "id",
  })
  skillTreeNode?: SkillTreeNodeEntity | null;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "update_at" })
  updatedAt: Date;
}
