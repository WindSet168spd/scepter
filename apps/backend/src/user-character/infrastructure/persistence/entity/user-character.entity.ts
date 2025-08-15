import { CharacterEntity } from "src/character/infrastructure/persistence/entity/character.entity";
import { LightconeEntity } from "src/lightcone/infrastructure/persistence/entity/lightcone.entity";
import { RelicEntity } from "src/relic/infrastructure/persistence/entity/relic.entity";
import { UserCharacterSkillTreeNodeEntity } from "src/user-character-skill-tree-node/infrastructure/persistence/entity/user-character-skill-tree-node.entity";
import { UserEntity } from "src/user/infrastructure/persistence/entity/user.entity";
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
  @PrimaryColumn()
  id: number;

  @Column({ type: "varchar", length: 50, nullable: true })
  costume?: string;

  @Column({ type: "int2" })
  level: number;

  @Column({ type: "int2" })
  ascension: number;

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

  @ManyToOne(() => LightconeEntity)
  @JoinColumn({
    name: "lightcone_id",
    referencedColumnName: "id",
  })
  lightcone?: LightconeEntity | null;

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
