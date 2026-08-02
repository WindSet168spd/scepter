import { CombatTypeEntity } from "../combat-type/combat-type.entity";
import { EidolonEntity } from "../eidolon/eidolon.entity";
import { PathEntity } from "../path/path.entity";
import { SkillTreeNodeEntity } from "../skill-tree-node/skill-tree-node.entity";
import { StatDataEntity } from "../stat-data/stat-data.entity";
import { UserCharacterEntity } from "../user-character/user-character.entity";
import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinTable,
  ManyToMany,
  JoinColumn,
} from "typeorm";

@Entity({ name: "character" })
export class CharacterEntity {
  @PrimaryColumn()
  id: number;

  @Column({ type: "varchar", length: 40 })
  name: string;

  @Column({ type: "text", name: "icon_url" })
  iconUrl: string;

  @Column({ type: "text", name: "splash_art_url" })
  splashArtUrl: string;

  @Column({ type: "int2" })
  stars: number;

  @ManyToOne(() => PathEntity)
  @JoinColumn({
    name: "path_id",
    referencedColumnName: "id",
  })
  path?: PathEntity | null;

  @ManyToOne(() => CombatTypeEntity)
  @JoinColumn({
    name: "combat_type_id",
    referencedColumnName: "id",
  })
  combatType?: CombatTypeEntity | null;

  @OneToMany(() => EidolonEntity, (eidolon) => eidolon.character)
  eidolons?: EidolonEntity[];

  @OneToMany(
    () => UserCharacterEntity,
    (userCharacter) => userCharacter.character,
  )
  userCharacters?: UserCharacterEntity[];

  @OneToMany(
    () => SkillTreeNodeEntity,
    (skillTreeNode) => skillTreeNode.character,
  )
  skillTreeNodes?: SkillTreeNodeEntity[];

  @JoinTable({
    name: "character_stat_data",
    joinColumn: {
      name: "character_id",
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
