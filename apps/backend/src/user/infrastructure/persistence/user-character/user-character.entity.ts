import { CharacterEntity } from "../character/character.entity";
import { RelicEntity } from "../relic/relic.entity";
import { StatDataEntity } from "../stat-data/stat-data.entity";
import { UserCharacterSkillTreeNodeEntity } from "../user-character-skill-tree-node/user-character-skill-tree-node.entity";
import { UserLightconeEntity } from "../user-lightcone/user-lightcone.entity";
import { UserEntity } from "../user/user.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({
  name: "user_character",
})
export class UserCharacterEntity {
  @PrimaryColumn({ type: "uuid" })
  id: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  costume?: string;

  @Column({ type: "int2" })
  level: number;

  @Column({ type: "int2" })
  ascension: number;

  @Column({ type: "int2" })
  eidolons: number;

  @ManyToOne(() => CharacterEntity, (character) => character.userCharacters)
  @JoinColumn({
    name: "character_id",
    referencedColumnName: "id",
  })
  character?: CharacterEntity | null;

  @ManyToOne(() => UserEntity, (user) => user.userCharacters)
  @JoinColumn({
    name: "user_id",
    referencedColumnName: "uid",
  })
  user?: UserEntity | null;

  @ManyToOne(
    () => UserLightconeEntity,
    (userLightcone) => userLightcone.userCharacter,
    {
      nullable: true,
      onDelete: "CASCADE",
    },
  )
  @JoinColumn({
    name: "user_lightcone_id",
    referencedColumnName: "id",
  })
  userLightcone?: UserLightconeEntity | null;

  @JoinTable({
    name: "user_character_relic",
    joinColumn: {
      name: "user_character_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "relic_id",
      referencedColumnName: "id",
    },
  })
  @ManyToMany(() => RelicEntity, (relic) => relic, {
    onDelete: "CASCADE",
  })
  relics?: RelicEntity[];

  @JoinTable({
    name: "user_character_stat_data",
    joinColumn: {
      name: "user_character_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "stat_data_id",
      referencedColumnName: "id",
    },
  })
  @ManyToMany(() => StatDataEntity, (statData) => statData.userCharacters, {
    onDelete: "CASCADE",
  })
  statsData?: StatDataEntity[];

  @OneToMany(
    () => UserCharacterSkillTreeNodeEntity,
    (userCharacterSkillTreeNode) => userCharacterSkillTreeNode.userCharacter,
  )
  userCharacterSkillTreeNodes?: UserCharacterSkillTreeNodeEntity[];

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "update_at" })
  updatedAt: Date;
}
