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

  @Column({ type: "text" })
  icon: string;

  @Column({ type: "int8" })
  level: number;

  @Index()
  @Column({ type: "varchar", length: 14 })
  nickname: string;

  @Column({ type: "text" })
  signature: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // @OneToMany(() => {}, (character) => character.userUid)
  // characters: string;
}
