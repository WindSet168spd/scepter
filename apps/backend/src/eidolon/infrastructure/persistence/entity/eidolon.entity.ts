import { CharacterEntity } from "src/character/infrastructure/persistence/entity/character.entity";
import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

@Entity({ name: "eidolon" })
export class EidolonEntity {
  @PrimaryColumn()
  id: number;

  @Column({ type: "smallint" })
  order: number;

  @Column({ type: "varchar", length: 40 })
  name: string;

  @Column({ type: "text", name: "icon_url" })
  iconUrl: string;

  @ManyToOne(() => CharacterEntity, (character) => character.eidolons, {
    onDelete: "CASCADE",
  })
  @JoinColumn({
    name: "character_id",
    referencedColumnName: "id",
  })
  character?: CharacterEntity;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "update_at" })
  updatedAt: Date;
}
