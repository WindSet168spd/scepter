import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({
  name: "user",
})
export class UserEntity {
  @PrimaryColumn()
  uid: number;

  @Column({ type: "int" })
  achievementCount: number;

  @Column({ type: "string" })
  icon: string;

  @Column({ type: "int8" })
  level: number;

  @Index()
  @Column("string")
  nickname: string;

  @Column("string")
  signature: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // @OneToMany(() => {}, (character) => character.userUid)
  // characters: string;
}
