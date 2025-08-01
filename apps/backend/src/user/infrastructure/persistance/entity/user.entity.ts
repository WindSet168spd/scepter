import { Column, Entity, PrimaryColumn } from "typeorm";

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

  @Column("string")
  nickname: string;

  @Column("string")
  signature: string;

  // @OneToMany(() => {}, (character) => character.userUid)
  // characters: string;
}
