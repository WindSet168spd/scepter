import { CombatTypeEntity } from "src/combat-type/infrastructure/persistence/entity/combat-type.entity";
import { EidolonEntity } from "src/eidolon/infrastructure/persistence/entity/eidolon.entity";
import { PathEntity } from "src/path/infrastructure/persistence/entity/path.entity";
import { SkillTreeNodeEntity } from "src/skill-tree-node/infrastructure/persistence/entity/skill-tree-node.entity";
import { StatDataEntity } from "src/stat-data/infrastructure/persistence/entity/stat-data.entity";
import { UserCharacterEntity } from "src/user-character/infrastructure/persistence/entity/user-character.entity";
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
