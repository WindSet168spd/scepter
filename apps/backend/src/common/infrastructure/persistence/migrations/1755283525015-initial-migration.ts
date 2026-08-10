import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1755283525015 implements MigrationInterface {
  name = "InitialMigration1755283525015";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "combat_type" ("id" integer NOT NULL, "name" character varying(40) NOT NULL, "icon_url" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_832cd263da1608441829a5566e4" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "eidolon" ("id" integer NOT NULL, "order" smallint NOT NULL, "name" character varying(40) NOT NULL, "icon_url" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "character_id" integer, CONSTRAINT "PK_82aff4ee2d1f340f159497b2ca5" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "path" ("id" integer NOT NULL, "name" character varying(40) NOT NULL, "icon_url" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ff3517dd5a3588e5f9395c6665d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "lightcone" ("id" integer NOT NULL, "name" character varying(60) NOT NULL, "image_url" text NOT NULL, "stars" smallint NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "path_id" integer, CONSTRAINT "PK_33005b3b34c3b4d9ef3afc3f92f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "relic_set" ("id" integer NOT NULL, "name" character varying(60) NOT NULL, "relic_set_icon_url" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cd7cb3bed8d4171649bf862ce87" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "relic" ("id" integer NOT NULL, "relic_part" smallint NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "relic_set_id" integer, CONSTRAINT "PK_073892baa1513a3f0369abf41e9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "stat" ("id" integer NOT NULL, "name" character varying(40) NOT NULL, "icon_url" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_132de903d366f4c06cd586c43c0" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "stat_data" ("id" integer NOT NULL, "is_percent" boolean NOT NULL, "value" numeric(6,3) NOT NULL, "type" smallint NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "stat_id" integer, CONSTRAINT "PK_bcb672ff3e143cec8a8c5b24bb0" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("uid" integer NOT NULL, "achievement_count" integer NOT NULL, "icon" text NOT NULL, "level" smallint NOT NULL, "nickname" character varying(14) NOT NULL, "signature" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_df955cae05f17b2bcf5045cc021" PRIMARY KEY ("uid"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_e2364281027b926b879fa2fa1e" ON "user" ("nickname") `,
    );
    await queryRunner.query(
      `CREATE TABLE "user_character" ("id" integer NOT NULL, "costume" character varying(50), "level" smallint NOT NULL, "ascension" smallint NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "character_id" integer, "user_id" integer, "lightcone_id" integer, CONSTRAINT "PK_b8f8ed851510bad74faa705e149" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "character" ("id" integer NOT NULL, "name" character varying(40) NOT NULL, "icon_url" text NOT NULL, "splash_art_url" text NOT NULL, "stars" smallint NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "path_id" integer, "combat_type_id" integer, CONSTRAINT "PK_6c4aec48c564968be15078b8ae5" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "skill_tree_node" ("id" integer NOT NULL, "icon_url" text NOT NULL, "skill_tree_node_type" smallint NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "stat_data_id" integer, "characterId" integer, "parent_skill_tree_node_id" integer, CONSTRAINT "REL_974f107d607950da495771af45" UNIQUE ("stat_data_id"), CONSTRAINT "PK_f4069ca6d25d400ee25e1f76132" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user_character_skill_tree_node" ("id" integer NOT NULL, "level" smallint NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "user_character_id" integer, "skill_tree_node_id" integer, CONSTRAINT "PK_8a80e3b2a7308fd957678492604" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "lightcone_stat_data" ("lightcone_id" integer NOT NULL, "stat_data_id" integer NOT NULL, CONSTRAINT "PK_dbe8db2a34c2527969f8b33ae31" PRIMARY KEY ("lightcone_id", "stat_data_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_f88d2fd892369ee39f0086629f" ON "lightcone_stat_data" ("lightcone_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_727ddba61ba8d445f5d2a6e2a9" ON "lightcone_stat_data" ("stat_data_id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "relic_set_stat_data" ("relic_set_id" integer NOT NULL, "stat_data_id" integer NOT NULL, CONSTRAINT "PK_de224d4e6d98bff1f9ee6c0eb6e" PRIMARY KEY ("relic_set_id", "stat_data_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_b9e9d224fa5a9c9a118659f2d0" ON "relic_set_stat_data" ("relic_set_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_b0947caf88d5f16d684db97017" ON "relic_set_stat_data" ("stat_data_id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "relic_stat_data" ("relic_id" integer NOT NULL, "stat_data_id" integer NOT NULL, CONSTRAINT "PK_25c44dcacf6f630d24075b7c386" PRIMARY KEY ("relic_id", "stat_data_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_534e025b502be445557303f3f9" ON "relic_stat_data" ("relic_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_33fb338ca7a3631cfd9244035c" ON "relic_stat_data" ("stat_data_id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "user_character_relic" ("user_character_id" integer NOT NULL, "relic_id" integer NOT NULL, CONSTRAINT "PK_fd5b6fede341be6bb97c8f34a09" PRIMARY KEY ("user_character_id", "relic_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_15e406cbaa20badfb44659133d" ON "user_character_relic" ("user_character_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_ec66eb42f5bf3830a6417fa945" ON "user_character_relic" ("relic_id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "character_stat_data" ("character_id" integer NOT NULL, "stat_data_id" integer NOT NULL, CONSTRAINT "PK_95c0b608044b474e6ce696fe7cb" PRIMARY KEY ("character_id", "stat_data_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_5a33422b5ab91e58b1bf89df03" ON "character_stat_data" ("character_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_056fbb5f15ea59308f1a2a20fc" ON "character_stat_data" ("stat_data_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "eidolon" ADD CONSTRAINT "FK_ba3477616b14a5278ae9a9662de" FOREIGN KEY ("character_id") REFERENCES "character"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "lightcone" ADD CONSTRAINT "FK_99404ccae9354be338ee6efd340" FOREIGN KEY ("path_id") REFERENCES "path"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic" ADD CONSTRAINT "FK_bfd68738bc6b203e764226c08e1" FOREIGN KEY ("relic_set_id") REFERENCES "relic_set"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "stat_data" ADD CONSTRAINT "FK_b3f15853a2cb1b6c1e87a3ead77" FOREIGN KEY ("stat_id") REFERENCES "stat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character" ADD CONSTRAINT "FK_6a6980b38e058f61d9042afb622" FOREIGN KEY ("character_id") REFERENCES "character"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character" ADD CONSTRAINT "FK_f35450bc5805721ca857dbe9439" FOREIGN KEY ("user_id") REFERENCES "user"("uid") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character" ADD CONSTRAINT "FK_d93991827ef18c46b911d2b12d1" FOREIGN KEY ("lightcone_id") REFERENCES "lightcone"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "character" ADD CONSTRAINT "FK_45b41651651d5ecad1fda1c8125" FOREIGN KEY ("path_id") REFERENCES "path"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "character" ADD CONSTRAINT "FK_d5d83bc355a83ba9a98bd4135a6" FOREIGN KEY ("combat_type_id") REFERENCES "combat_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "skill_tree_node" ADD CONSTRAINT "FK_974f107d607950da495771af455" FOREIGN KEY ("stat_data_id") REFERENCES "stat_data"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "skill_tree_node" ADD CONSTRAINT "FK_b5eabf1d0e771d9eac34a3581e7" FOREIGN KEY ("characterId") REFERENCES "character"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "skill_tree_node" ADD CONSTRAINT "FK_f96149e7c79c5d2a3ee1157cdc8" FOREIGN KEY ("parent_skill_tree_node_id") REFERENCES "skill_tree_node"("id") ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_skill_tree_node" ADD CONSTRAINT "FK_de5f011e5ff4986c7516a841d1c" FOREIGN KEY ("user_character_id") REFERENCES "user_character"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_skill_tree_node" ADD CONSTRAINT "FK_0da66916a852b7a3f2e65d89510" FOREIGN KEY ("skill_tree_node_id") REFERENCES "skill_tree_node"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "lightcone_stat_data" ADD CONSTRAINT "FK_f88d2fd892369ee39f0086629f6" FOREIGN KEY ("lightcone_id") REFERENCES "lightcone"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "lightcone_stat_data" ADD CONSTRAINT "FK_727ddba61ba8d445f5d2a6e2a9c" FOREIGN KEY ("stat_data_id") REFERENCES "stat_data"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_set_stat_data" ADD CONSTRAINT "FK_b9e9d224fa5a9c9a118659f2d0f" FOREIGN KEY ("relic_set_id") REFERENCES "relic_set"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_set_stat_data" ADD CONSTRAINT "FK_b0947caf88d5f16d684db970170" FOREIGN KEY ("stat_data_id") REFERENCES "stat_data"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" ADD CONSTRAINT "FK_534e025b502be445557303f3f93" FOREIGN KEY ("relic_id") REFERENCES "relic"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" ADD CONSTRAINT "FK_33fb338ca7a3631cfd9244035ce" FOREIGN KEY ("stat_data_id") REFERENCES "stat_data"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" ADD CONSTRAINT "FK_15e406cbaa20badfb44659133da" FOREIGN KEY ("user_character_id") REFERENCES "user_character"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" ADD CONSTRAINT "FK_ec66eb42f5bf3830a6417fa945b" FOREIGN KEY ("relic_id") REFERENCES "relic"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "character_stat_data" ADD CONSTRAINT "FK_5a33422b5ab91e58b1bf89df03a" FOREIGN KEY ("character_id") REFERENCES "character"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "character_stat_data" ADD CONSTRAINT "FK_056fbb5f15ea59308f1a2a20fc2" FOREIGN KEY ("stat_data_id") REFERENCES "stat_data"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "character_stat_data" DROP CONSTRAINT "FK_056fbb5f15ea59308f1a2a20fc2"`,
    );
    await queryRunner.query(
      `ALTER TABLE "character_stat_data" DROP CONSTRAINT "FK_5a33422b5ab91e58b1bf89df03a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" DROP CONSTRAINT "FK_ec66eb42f5bf3830a6417fa945b"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" DROP CONSTRAINT "FK_15e406cbaa20badfb44659133da"`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" DROP CONSTRAINT "FK_33fb338ca7a3631cfd9244035ce"`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" DROP CONSTRAINT "FK_534e025b502be445557303f3f93"`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_set_stat_data" DROP CONSTRAINT "FK_b0947caf88d5f16d684db970170"`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_set_stat_data" DROP CONSTRAINT "FK_b9e9d224fa5a9c9a118659f2d0f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "lightcone_stat_data" DROP CONSTRAINT "FK_727ddba61ba8d445f5d2a6e2a9c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "lightcone_stat_data" DROP CONSTRAINT "FK_f88d2fd892369ee39f0086629f6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_skill_tree_node" DROP CONSTRAINT "FK_0da66916a852b7a3f2e65d89510"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_skill_tree_node" DROP CONSTRAINT "FK_de5f011e5ff4986c7516a841d1c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "skill_tree_node" DROP CONSTRAINT "FK_f96149e7c79c5d2a3ee1157cdc8"`,
    );
    await queryRunner.query(
      `ALTER TABLE "skill_tree_node" DROP CONSTRAINT "FK_b5eabf1d0e771d9eac34a3581e7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "skill_tree_node" DROP CONSTRAINT "FK_974f107d607950da495771af455"`,
    );
    await queryRunner.query(
      `ALTER TABLE "character" DROP CONSTRAINT "FK_d5d83bc355a83ba9a98bd4135a6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "character" DROP CONSTRAINT "FK_45b41651651d5ecad1fda1c8125"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character" DROP CONSTRAINT "FK_d93991827ef18c46b911d2b12d1"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character" DROP CONSTRAINT "FK_f35450bc5805721ca857dbe9439"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character" DROP CONSTRAINT "FK_6a6980b38e058f61d9042afb622"`,
    );
    await queryRunner.query(
      `ALTER TABLE "stat_data" DROP CONSTRAINT "FK_b3f15853a2cb1b6c1e87a3ead77"`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic" DROP CONSTRAINT "FK_bfd68738bc6b203e764226c08e1"`,
    );
    await queryRunner.query(
      `ALTER TABLE "lightcone" DROP CONSTRAINT "FK_99404ccae9354be338ee6efd340"`,
    );
    await queryRunner.query(
      `ALTER TABLE "eidolon" DROP CONSTRAINT "FK_ba3477616b14a5278ae9a9662de"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_056fbb5f15ea59308f1a2a20fc"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_5a33422b5ab91e58b1bf89df03"`,
    );
    await queryRunner.query(`DROP TABLE "character_stat_data"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_ec66eb42f5bf3830a6417fa945"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_15e406cbaa20badfb44659133d"`,
    );
    await queryRunner.query(`DROP TABLE "user_character_relic"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_33fb338ca7a3631cfd9244035c"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_534e025b502be445557303f3f9"`,
    );
    await queryRunner.query(`DROP TABLE "relic_stat_data"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_b0947caf88d5f16d684db97017"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_b9e9d224fa5a9c9a118659f2d0"`,
    );
    await queryRunner.query(`DROP TABLE "relic_set_stat_data"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_727ddba61ba8d445f5d2a6e2a9"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_f88d2fd892369ee39f0086629f"`,
    );
    await queryRunner.query(`DROP TABLE "lightcone_stat_data"`);
    await queryRunner.query(`DROP TABLE "user_character_skill_tree_node"`);
    await queryRunner.query(`DROP TABLE "skill_tree_node"`);
    await queryRunner.query(`DROP TABLE "character"`);
    await queryRunner.query(`DROP TABLE "user_character"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_e2364281027b926b879fa2fa1e"`,
    );
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "stat_data"`);
    await queryRunner.query(`DROP TABLE "stat"`);
    await queryRunner.query(`DROP TABLE "relic"`);
    await queryRunner.query(`DROP TABLE "relic_set"`);
    await queryRunner.query(`DROP TABLE "lightcone"`);
    await queryRunner.query(`DROP TABLE "path"`);
    await queryRunner.query(`DROP TABLE "eidolon"`);
    await queryRunner.query(`DROP TABLE "combat_type"`);
  }
}
