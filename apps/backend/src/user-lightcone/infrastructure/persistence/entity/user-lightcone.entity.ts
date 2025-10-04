import { LightconeEntity } from "src/lightcone/infrastructure/persistence/entity/lightcone.entity";
import { UserCharacterEntity } from "src/user-character/infrastructure/persistence/entity/user-character.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({
  name: "user_lightcone",
})
export class UserLightconeEntity {
  @PrimaryColumn({ type: "uuid" })
  id: string;

  @Column({ type: "int2", name: "lightcone_level" })
  lightconeLevel: number;

  @Column({ type: "int2", name: "lightcone_superimposition" })
  lightconeSuperimposition: number;

  @Column({ type: "int2" })
  ascension: number;

  @ManyToOne(() => LightconeEntity)
  @JoinColumn({
    name: "lightcone_id",
    referencedColumnName: "id",
  })
  lightcone?: LightconeEntity | null;

  @OneToOne(() => UserCharacterEntity, (userCharacter) => userCharacter, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "user_character_id", referencedColumnName: "id" })
  userCharacter?: UserCharacterEntity | null;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "update_at" })
  updatedAt: Date;
}
