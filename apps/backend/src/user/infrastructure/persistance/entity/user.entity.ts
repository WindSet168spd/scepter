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

  @Column({ type: "int", name: "achievement_count" })
  achievementCount: number;

  @Column({ type: "text" })
  icon: string;

  @Column({ type: "smallint" })
  level: number;

  @Index()
  @Column({ type: "varchar", length: 14 })
  nickname: string;

  @Column({ type: "text" })
  signature: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "update_at" })
  updatedAt: Date;

  // @OneToMany(() => {}, (character) => character.userUid)
  // characters: string;
}
