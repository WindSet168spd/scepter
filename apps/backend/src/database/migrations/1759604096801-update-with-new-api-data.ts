import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateWithNewApiData1759604096801 implements MigrationInterface {
  name = "UpdateWithNewApiData1759604096801";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_character" DROP CONSTRAINT "FK_d93991827ef18c46b911d2b12d1"`,
    );
    await queryRunner.query(
      `CREATE TABLE "user_lightcone" ("id" uuid NOT NULL, "lightcone_level" smallint NOT NULL, "lightcone_superimposition" smallint NOT NULL, "ascension" smallint NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "lightcone_id" integer, "user_character_id" uuid, CONSTRAINT "REL_c61916cccfe0283b5a525e40f2" UNIQUE ("user_character_id"), CONSTRAINT "PK_da41ce5df6585b25149ddc5f859" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user_character_stat_data" ("user_character_id" uuid NOT NULL, "stat_data_id" uuid NOT NULL, CONSTRAINT "PK_b49c7ba80f516f34fdee07e17b0" PRIMARY KEY ("user_character_id", "stat_data_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_a3a38d21de65c6d40f15e66fc8" ON "user_character_stat_data" ("user_character_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_cf298e02aaef91ea975688b322" ON "user_character_stat_data" ("stat_data_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character" DROP COLUMN "lightcone_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character" ADD "user_lightcone_id" uuid`,
    );
    await queryRunner.query(
      `ALTER TABLE "stat" ADD "type" character varying(40) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "stat_data" ADD "attribute" character varying(40) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "character" DROP CONSTRAINT "FK_45b41651651d5ecad1fda1c8125"`,
    );
    await queryRunner.query(
      `ALTER TABLE "lightcone" DROP CONSTRAINT "FK_99404ccae9354be338ee6efd340"`,
    );
    await queryRunner.query(
      `ALTER TABLE "path" DROP CONSTRAINT "PK_ff3517dd5a3588e5f9395c6665d"`,
    );
    await queryRunner.query(`ALTER TABLE "path" DROP COLUMN "id"`);
    await queryRunner.query(
      `ALTER TABLE "path" ADD "id" character varying(40) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "path" ADD CONSTRAINT "PK_ff3517dd5a3588e5f9395c6665d" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "character" DROP CONSTRAINT "FK_d5d83bc355a83ba9a98bd4135a6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "combat_type" DROP CONSTRAINT "PK_832cd263da1608441829a5566e4"`,
    );
    await queryRunner.query(`ALTER TABLE "combat_type" DROP COLUMN "id"`);
    await queryRunner.query(
      `ALTER TABLE "combat_type" ADD "id" character varying(40) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "combat_type" ADD CONSTRAINT "PK_832cd263da1608441829a5566e4" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "skill_tree_node" DROP CONSTRAINT "FK_974f107d607950da495771af455"`,
    );
    await queryRunner.query(
      `ALTER TABLE "skill_tree_node" DROP CONSTRAINT "REL_974f107d607950da495771af45"`,
    );
    await queryRunner.query(
      `ALTER TABLE "skill_tree_node" DROP COLUMN "stat_data_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "skill_tree_node" ADD "stat_data_id" uuid`,
    );
    await queryRunner.query(
      `ALTER TABLE "skill_tree_node" ADD CONSTRAINT "UQ_974f107d607950da495771af455" UNIQUE ("stat_data_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" DROP CONSTRAINT "FK_534e025b502be445557303f3f93"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" DROP CONSTRAINT "FK_ec66eb42f5bf3830a6417fa945b"`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic" DROP CONSTRAINT "PK_073892baa1513a3f0369abf41e9"`,
    );
    await queryRunner.query(`ALTER TABLE "relic" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "relic" ADD "id" uuid NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "relic" ADD CONSTRAINT "PK_073892baa1513a3f0369abf41e9" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_skill_tree_node" DROP CONSTRAINT "FK_de5f011e5ff4986c7516a841d1c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_skill_tree_node" DROP CONSTRAINT "PK_8a80e3b2a7308fd957678492604"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_skill_tree_node" DROP COLUMN "id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_skill_tree_node" ADD "id" uuid NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_skill_tree_node" ADD CONSTRAINT "PK_8a80e3b2a7308fd957678492604" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_skill_tree_node" DROP COLUMN "user_character_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_skill_tree_node" ADD "user_character_id" uuid`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "signature" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" DROP CONSTRAINT "FK_15e406cbaa20badfb44659133da"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character" DROP CONSTRAINT "PK_b8f8ed851510bad74faa705e149"`,
    );
    await queryRunner.query(`ALTER TABLE "user_character" DROP COLUMN "id"`);
    await queryRunner.query(
      `ALTER TABLE "user_character" ADD "id" uuid NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character" ADD CONSTRAINT "PK_b8f8ed851510bad74faa705e149" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(`ALTER TABLE "character" DROP COLUMN "path_id"`);
    await queryRunner.query(
      `ALTER TABLE "character" ADD "path_id" character varying(40)`,
    );
    await queryRunner.query(
      `ALTER TABLE "character" DROP COLUMN "combat_type_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "character" ADD "combat_type_id" character varying(40)`,
    );
    await queryRunner.query(
      `ALTER TABLE "stat_data" DROP CONSTRAINT "FK_b3f15853a2cb1b6c1e87a3ead77"`,
    );
    await queryRunner.query(
      `ALTER TABLE "stat" DROP CONSTRAINT "PK_132de903d366f4c06cd586c43c0"`,
    );
    await queryRunner.query(`ALTER TABLE "stat" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "stat" ADD "id" uuid NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "stat" ADD CONSTRAINT "PK_132de903d366f4c06cd586c43c0" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" DROP CONSTRAINT "FK_33fb338ca7a3631cfd9244035ce"`,
    );
    await queryRunner.query(
      `ALTER TABLE "character_stat_data" DROP CONSTRAINT "FK_056fbb5f15ea59308f1a2a20fc2"`,
    );
    await queryRunner.query(
      `ALTER TABLE "lightcone_stat_data" DROP CONSTRAINT "FK_727ddba61ba8d445f5d2a6e2a9c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_set_stat_data" DROP CONSTRAINT "FK_b0947caf88d5f16d684db970170"`,
    );
    await queryRunner.query(
      `ALTER TABLE "stat_data" DROP CONSTRAINT "PK_bcb672ff3e143cec8a8c5b24bb0"`,
    );
    await queryRunner.query(`ALTER TABLE "stat_data" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "stat_data" ADD "id" uuid NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "stat_data" ADD CONSTRAINT "PK_bcb672ff3e143cec8a8c5b24bb0" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(`ALTER TABLE "stat_data" DROP COLUMN "stat_id"`);
    await queryRunner.query(`ALTER TABLE "stat_data" ADD "stat_id" uuid`);
    await queryRunner.query(`ALTER TABLE "lightcone" DROP COLUMN "path_id"`);
    await queryRunner.query(
      `ALTER TABLE "lightcone" ADD "path_id" character varying(40)`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_set_stat_data" DROP CONSTRAINT "PK_de224d4e6d98bff1f9ee6c0eb6e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_set_stat_data" ADD CONSTRAINT "PK_b9e9d224fa5a9c9a118659f2d0f" PRIMARY KEY ("relic_set_id")`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_b0947caf88d5f16d684db97017"`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_set_stat_data" DROP COLUMN "stat_data_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_set_stat_data" ADD "stat_data_id" uuid NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_set_stat_data" DROP CONSTRAINT "PK_b9e9d224fa5a9c9a118659f2d0f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_set_stat_data" ADD CONSTRAINT "PK_de224d4e6d98bff1f9ee6c0eb6e" PRIMARY KEY ("relic_set_id", "stat_data_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" DROP CONSTRAINT "PK_25c44dcacf6f630d24075b7c386"`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" ADD CONSTRAINT "PK_33fb338ca7a3631cfd9244035ce" PRIMARY KEY ("stat_data_id")`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_534e025b502be445557303f3f9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" DROP COLUMN "relic_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" ADD "relic_id" uuid NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" DROP CONSTRAINT "PK_33fb338ca7a3631cfd9244035ce"`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" ADD CONSTRAINT "PK_25c44dcacf6f630d24075b7c386" PRIMARY KEY ("stat_data_id", "relic_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" DROP CONSTRAINT "PK_25c44dcacf6f630d24075b7c386"`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" ADD CONSTRAINT "PK_534e025b502be445557303f3f93" PRIMARY KEY ("relic_id")`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_33fb338ca7a3631cfd9244035c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" DROP COLUMN "stat_data_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" ADD "stat_data_id" uuid NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" DROP CONSTRAINT "PK_534e025b502be445557303f3f93"`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" ADD CONSTRAINT "PK_25c44dcacf6f630d24075b7c386" PRIMARY KEY ("relic_id", "stat_data_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" DROP CONSTRAINT "PK_fd5b6fede341be6bb97c8f34a09"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" ADD CONSTRAINT "PK_ec66eb42f5bf3830a6417fa945b" PRIMARY KEY ("relic_id")`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_15e406cbaa20badfb44659133d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" DROP COLUMN "user_character_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" ADD "user_character_id" uuid NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" DROP CONSTRAINT "PK_ec66eb42f5bf3830a6417fa945b"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" ADD CONSTRAINT "PK_fd5b6fede341be6bb97c8f34a09" PRIMARY KEY ("relic_id", "user_character_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" DROP CONSTRAINT "PK_fd5b6fede341be6bb97c8f34a09"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" ADD CONSTRAINT "PK_15e406cbaa20badfb44659133da" PRIMARY KEY ("user_character_id")`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_ec66eb42f5bf3830a6417fa945"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" DROP COLUMN "relic_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" ADD "relic_id" uuid NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" DROP CONSTRAINT "PK_15e406cbaa20badfb44659133da"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" ADD CONSTRAINT "PK_fd5b6fede341be6bb97c8f34a09" PRIMARY KEY ("user_character_id", "relic_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "character_stat_data" DROP CONSTRAINT "PK_95c0b608044b474e6ce696fe7cb"`,
    );
    await queryRunner.query(
      `ALTER TABLE "character_stat_data" ADD CONSTRAINT "PK_5a33422b5ab91e58b1bf89df03a" PRIMARY KEY ("character_id")`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_056fbb5f15ea59308f1a2a20fc"`,
    );
    await queryRunner.query(
      `ALTER TABLE "character_stat_data" DROP COLUMN "stat_data_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "character_stat_data" ADD "stat_data_id" uuid NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "character_stat_data" DROP CONSTRAINT "PK_5a33422b5ab91e58b1bf89df03a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "character_stat_data" ADD CONSTRAINT "PK_95c0b608044b474e6ce696fe7cb" PRIMARY KEY ("character_id", "stat_data_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "lightcone_stat_data" DROP CONSTRAINT "PK_dbe8db2a34c2527969f8b33ae31"`,
    );
    await queryRunner.query(
      `ALTER TABLE "lightcone_stat_data" ADD CONSTRAINT "PK_f88d2fd892369ee39f0086629f6" PRIMARY KEY ("lightcone_id")`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_727ddba61ba8d445f5d2a6e2a9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "lightcone_stat_data" DROP COLUMN "stat_data_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "lightcone_stat_data" ADD "stat_data_id" uuid NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "lightcone_stat_data" DROP CONSTRAINT "PK_f88d2fd892369ee39f0086629f6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "lightcone_stat_data" ADD CONSTRAINT "PK_dbe8db2a34c2527969f8b33ae31" PRIMARY KEY ("lightcone_id", "stat_data_id")`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_b0947caf88d5f16d684db97017" ON "relic_set_stat_data" ("stat_data_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_534e025b502be445557303f3f9" ON "relic_stat_data" ("relic_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_33fb338ca7a3631cfd9244035c" ON "relic_stat_data" ("stat_data_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_15e406cbaa20badfb44659133d" ON "user_character_relic" ("user_character_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_ec66eb42f5bf3830a6417fa945" ON "user_character_relic" ("relic_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_056fbb5f15ea59308f1a2a20fc" ON "character_stat_data" ("stat_data_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_727ddba61ba8d445f5d2a6e2a9" ON "lightcone_stat_data" ("stat_data_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "skill_tree_node" ADD CONSTRAINT "FK_974f107d607950da495771af455" FOREIGN KEY ("stat_data_id") REFERENCES "stat_data"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_skill_tree_node" ADD CONSTRAINT "FK_de5f011e5ff4986c7516a841d1c" FOREIGN KEY ("user_character_id") REFERENCES "user_character"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character" ADD CONSTRAINT "FK_68728568c86e4b6d08581acc5c6" FOREIGN KEY ("user_lightcone_id") REFERENCES "user_lightcone"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "character" ADD CONSTRAINT "FK_45b41651651d5ecad1fda1c8125" FOREIGN KEY ("path_id") REFERENCES "path"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "character" ADD CONSTRAINT "FK_d5d83bc355a83ba9a98bd4135a6" FOREIGN KEY ("combat_type_id") REFERENCES "combat_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "stat_data" ADD CONSTRAINT "FK_b3f15853a2cb1b6c1e87a3ead77" FOREIGN KEY ("stat_id") REFERENCES "stat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "lightcone" ADD CONSTRAINT "FK_99404ccae9354be338ee6efd340" FOREIGN KEY ("path_id") REFERENCES "path"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_lightcone" ADD CONSTRAINT "FK_2f36759a741b141bf34a7996d02" FOREIGN KEY ("lightcone_id") REFERENCES "lightcone"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_lightcone" ADD CONSTRAINT "FK_c61916cccfe0283b5a525e40f20" FOREIGN KEY ("user_character_id") REFERENCES "user_character"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
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
      `ALTER TABLE "user_character_stat_data" ADD CONSTRAINT "FK_a3a38d21de65c6d40f15e66fc89" FOREIGN KEY ("user_character_id") REFERENCES "user_character"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_stat_data" ADD CONSTRAINT "FK_cf298e02aaef91ea975688b3221" FOREIGN KEY ("stat_data_id") REFERENCES "stat_data"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "character_stat_data" ADD CONSTRAINT "FK_056fbb5f15ea59308f1a2a20fc2" FOREIGN KEY ("stat_data_id") REFERENCES "stat_data"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "lightcone_stat_data" ADD CONSTRAINT "FK_727ddba61ba8d445f5d2a6e2a9c" FOREIGN KEY ("stat_data_id") REFERENCES "stat_data"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "lightcone_stat_data" DROP CONSTRAINT "FK_727ddba61ba8d445f5d2a6e2a9c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "character_stat_data" DROP CONSTRAINT "FK_056fbb5f15ea59308f1a2a20fc2"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_stat_data" DROP CONSTRAINT "FK_cf298e02aaef91ea975688b3221"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_stat_data" DROP CONSTRAINT "FK_a3a38d21de65c6d40f15e66fc89"`,
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
      `ALTER TABLE "user_lightcone" DROP CONSTRAINT "FK_c61916cccfe0283b5a525e40f20"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_lightcone" DROP CONSTRAINT "FK_2f36759a741b141bf34a7996d02"`,
    );
    await queryRunner.query(
      `ALTER TABLE "lightcone" DROP CONSTRAINT "FK_99404ccae9354be338ee6efd340"`,
    );
    await queryRunner.query(
      `ALTER TABLE "stat_data" DROP CONSTRAINT "FK_b3f15853a2cb1b6c1e87a3ead77"`,
    );
    await queryRunner.query(
      `ALTER TABLE "character" DROP CONSTRAINT "FK_d5d83bc355a83ba9a98bd4135a6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "character" DROP CONSTRAINT "FK_45b41651651d5ecad1fda1c8125"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character" DROP CONSTRAINT "FK_68728568c86e4b6d08581acc5c6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_skill_tree_node" DROP CONSTRAINT "FK_de5f011e5ff4986c7516a841d1c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "skill_tree_node" DROP CONSTRAINT "FK_974f107d607950da495771af455"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_727ddba61ba8d445f5d2a6e2a9"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_056fbb5f15ea59308f1a2a20fc"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_ec66eb42f5bf3830a6417fa945"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_15e406cbaa20badfb44659133d"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_33fb338ca7a3631cfd9244035c"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_534e025b502be445557303f3f9"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_b0947caf88d5f16d684db97017"`,
    );
    await queryRunner.query(
      `ALTER TABLE "lightcone_stat_data" DROP CONSTRAINT "PK_dbe8db2a34c2527969f8b33ae31"`,
    );
    await queryRunner.query(
      `ALTER TABLE "lightcone_stat_data" ADD CONSTRAINT "PK_f88d2fd892369ee39f0086629f6" PRIMARY KEY ("lightcone_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "lightcone_stat_data" DROP COLUMN "stat_data_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "lightcone_stat_data" ADD "stat_data_id" integer NOT NULL`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_727ddba61ba8d445f5d2a6e2a9" ON "lightcone_stat_data" ("stat_data_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "lightcone_stat_data" DROP CONSTRAINT "PK_f88d2fd892369ee39f0086629f6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "lightcone_stat_data" ADD CONSTRAINT "PK_dbe8db2a34c2527969f8b33ae31" PRIMARY KEY ("lightcone_id", "stat_data_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "character_stat_data" DROP CONSTRAINT "PK_95c0b608044b474e6ce696fe7cb"`,
    );
    await queryRunner.query(
      `ALTER TABLE "character_stat_data" ADD CONSTRAINT "PK_5a33422b5ab91e58b1bf89df03a" PRIMARY KEY ("character_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "character_stat_data" DROP COLUMN "stat_data_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "character_stat_data" ADD "stat_data_id" integer NOT NULL`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_056fbb5f15ea59308f1a2a20fc" ON "character_stat_data" ("stat_data_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "character_stat_data" DROP CONSTRAINT "PK_5a33422b5ab91e58b1bf89df03a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "character_stat_data" ADD CONSTRAINT "PK_95c0b608044b474e6ce696fe7cb" PRIMARY KEY ("stat_data_id", "character_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" DROP CONSTRAINT "PK_fd5b6fede341be6bb97c8f34a09"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" ADD CONSTRAINT "PK_15e406cbaa20badfb44659133da" PRIMARY KEY ("user_character_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" DROP COLUMN "relic_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" ADD "relic_id" integer NOT NULL`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_ec66eb42f5bf3830a6417fa945" ON "user_character_relic" ("relic_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" DROP CONSTRAINT "PK_15e406cbaa20badfb44659133da"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" ADD CONSTRAINT "PK_fd5b6fede341be6bb97c8f34a09" PRIMARY KEY ("relic_id", "user_character_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" DROP CONSTRAINT "PK_fd5b6fede341be6bb97c8f34a09"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" ADD CONSTRAINT "PK_ec66eb42f5bf3830a6417fa945b" PRIMARY KEY ("relic_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" DROP COLUMN "user_character_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" ADD "user_character_id" integer NOT NULL`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_15e406cbaa20badfb44659133d" ON "user_character_relic" ("user_character_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" DROP CONSTRAINT "PK_ec66eb42f5bf3830a6417fa945b"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" ADD CONSTRAINT "PK_fd5b6fede341be6bb97c8f34a09" PRIMARY KEY ("user_character_id", "relic_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" DROP CONSTRAINT "PK_25c44dcacf6f630d24075b7c386"`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" ADD CONSTRAINT "PK_534e025b502be445557303f3f93" PRIMARY KEY ("relic_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" DROP COLUMN "stat_data_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" ADD "stat_data_id" integer NOT NULL`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_33fb338ca7a3631cfd9244035c" ON "relic_stat_data" ("stat_data_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" DROP CONSTRAINT "PK_534e025b502be445557303f3f93"`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" ADD CONSTRAINT "PK_25c44dcacf6f630d24075b7c386" PRIMARY KEY ("stat_data_id", "relic_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" DROP CONSTRAINT "PK_25c44dcacf6f630d24075b7c386"`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" ADD CONSTRAINT "PK_33fb338ca7a3631cfd9244035ce" PRIMARY KEY ("stat_data_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" DROP COLUMN "relic_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" ADD "relic_id" integer NOT NULL`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_534e025b502be445557303f3f9" ON "relic_stat_data" ("relic_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" DROP CONSTRAINT "PK_33fb338ca7a3631cfd9244035ce"`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" ADD CONSTRAINT "PK_25c44dcacf6f630d24075b7c386" PRIMARY KEY ("relic_id", "stat_data_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_set_stat_data" DROP CONSTRAINT "PK_de224d4e6d98bff1f9ee6c0eb6e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_set_stat_data" ADD CONSTRAINT "PK_b9e9d224fa5a9c9a118659f2d0f" PRIMARY KEY ("relic_set_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_set_stat_data" DROP COLUMN "stat_data_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_set_stat_data" ADD "stat_data_id" integer NOT NULL`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_b0947caf88d5f16d684db97017" ON "relic_set_stat_data" ("stat_data_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_set_stat_data" DROP CONSTRAINT "PK_b9e9d224fa5a9c9a118659f2d0f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_set_stat_data" ADD CONSTRAINT "PK_de224d4e6d98bff1f9ee6c0eb6e" PRIMARY KEY ("relic_set_id", "stat_data_id")`,
    );
    await queryRunner.query(`ALTER TABLE "lightcone" DROP COLUMN "path_id"`);
    await queryRunner.query(`ALTER TABLE "lightcone" ADD "path_id" integer`);
    await queryRunner.query(`ALTER TABLE "stat_data" DROP COLUMN "stat_id"`);
    await queryRunner.query(`ALTER TABLE "stat_data" ADD "stat_id" integer`);
    await queryRunner.query(
      `ALTER TABLE "stat_data" DROP CONSTRAINT "PK_bcb672ff3e143cec8a8c5b24bb0"`,
    );
    await queryRunner.query(`ALTER TABLE "stat_data" DROP COLUMN "id"`);
    await queryRunner.query(
      `ALTER TABLE "stat_data" ADD "id" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "stat_data" ADD CONSTRAINT "PK_bcb672ff3e143cec8a8c5b24bb0" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_set_stat_data" ADD CONSTRAINT "FK_b0947caf88d5f16d684db970170" FOREIGN KEY ("stat_data_id") REFERENCES "stat_data"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "lightcone_stat_data" ADD CONSTRAINT "FK_727ddba61ba8d445f5d2a6e2a9c" FOREIGN KEY ("stat_data_id") REFERENCES "stat_data"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "character_stat_data" ADD CONSTRAINT "FK_056fbb5f15ea59308f1a2a20fc2" FOREIGN KEY ("stat_data_id") REFERENCES "stat_data"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" ADD CONSTRAINT "FK_33fb338ca7a3631cfd9244035ce" FOREIGN KEY ("stat_data_id") REFERENCES "stat_data"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "stat" DROP CONSTRAINT "PK_132de903d366f4c06cd586c43c0"`,
    );
    await queryRunner.query(`ALTER TABLE "stat" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "stat" ADD "id" integer NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "stat" ADD CONSTRAINT "PK_132de903d366f4c06cd586c43c0" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "stat_data" ADD CONSTRAINT "FK_b3f15853a2cb1b6c1e87a3ead77" FOREIGN KEY ("stat_id") REFERENCES "stat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "character" DROP COLUMN "combat_type_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "character" ADD "combat_type_id" integer`,
    );
    await queryRunner.query(`ALTER TABLE "character" DROP COLUMN "path_id"`);
    await queryRunner.query(`ALTER TABLE "character" ADD "path_id" integer`);
    await queryRunner.query(
      `ALTER TABLE "user_character" DROP CONSTRAINT "PK_b8f8ed851510bad74faa705e149"`,
    );
    await queryRunner.query(`ALTER TABLE "user_character" DROP COLUMN "id"`);
    await queryRunner.query(
      `ALTER TABLE "user_character" ADD "id" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character" ADD CONSTRAINT "PK_b8f8ed851510bad74faa705e149" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" ADD CONSTRAINT "FK_15e406cbaa20badfb44659133da" FOREIGN KEY ("user_character_id") REFERENCES "user_character"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "signature" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_skill_tree_node" DROP COLUMN "user_character_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_skill_tree_node" ADD "user_character_id" integer`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_skill_tree_node" DROP CONSTRAINT "PK_8a80e3b2a7308fd957678492604"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_skill_tree_node" DROP COLUMN "id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_skill_tree_node" ADD "id" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_skill_tree_node" ADD CONSTRAINT "PK_8a80e3b2a7308fd957678492604" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_skill_tree_node" ADD CONSTRAINT "FK_de5f011e5ff4986c7516a841d1c" FOREIGN KEY ("user_character_id") REFERENCES "user_character"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic" DROP CONSTRAINT "PK_073892baa1513a3f0369abf41e9"`,
    );
    await queryRunner.query(`ALTER TABLE "relic" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "relic" ADD "id" integer NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "relic" ADD CONSTRAINT "PK_073892baa1513a3f0369abf41e9" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character_relic" ADD CONSTRAINT "FK_ec66eb42f5bf3830a6417fa945b" FOREIGN KEY ("relic_id") REFERENCES "relic"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "relic_stat_data" ADD CONSTRAINT "FK_534e025b502be445557303f3f93" FOREIGN KEY ("relic_id") REFERENCES "relic"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "skill_tree_node" DROP CONSTRAINT "UQ_974f107d607950da495771af455"`,
    );
    await queryRunner.query(
      `ALTER TABLE "skill_tree_node" DROP COLUMN "stat_data_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "skill_tree_node" ADD "stat_data_id" integer`,
    );
    await queryRunner.query(
      `ALTER TABLE "skill_tree_node" ADD CONSTRAINT "REL_974f107d607950da495771af45" UNIQUE ("stat_data_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "skill_tree_node" ADD CONSTRAINT "FK_974f107d607950da495771af455" FOREIGN KEY ("stat_data_id") REFERENCES "stat_data"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "combat_type" DROP CONSTRAINT "PK_832cd263da1608441829a5566e4"`,
    );
    await queryRunner.query(`ALTER TABLE "combat_type" DROP COLUMN "id"`);
    await queryRunner.query(
      `ALTER TABLE "combat_type" ADD "id" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "combat_type" ADD CONSTRAINT "PK_832cd263da1608441829a5566e4" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "character" ADD CONSTRAINT "FK_d5d83bc355a83ba9a98bd4135a6" FOREIGN KEY ("combat_type_id") REFERENCES "combat_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "path" DROP CONSTRAINT "PK_ff3517dd5a3588e5f9395c6665d"`,
    );
    await queryRunner.query(`ALTER TABLE "path" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "path" ADD "id" integer NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "path" ADD CONSTRAINT "PK_ff3517dd5a3588e5f9395c6665d" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "lightcone" ADD CONSTRAINT "FK_99404ccae9354be338ee6efd340" FOREIGN KEY ("path_id") REFERENCES "path"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "character" ADD CONSTRAINT "FK_45b41651651d5ecad1fda1c8125" FOREIGN KEY ("path_id") REFERENCES "path"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(`ALTER TABLE "stat_data" DROP COLUMN "attribute"`);
    await queryRunner.query(`ALTER TABLE "stat" DROP COLUMN "type"`);
    await queryRunner.query(
      `ALTER TABLE "user_character" DROP COLUMN "user_lightcone_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_character" ADD "lightcone_id" integer`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_cf298e02aaef91ea975688b322"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_a3a38d21de65c6d40f15e66fc8"`,
    );
    await queryRunner.query(`DROP TABLE "user_character_stat_data"`);
    await queryRunner.query(`DROP TABLE "user_lightcone"`);
    await queryRunner.query(
      `ALTER TABLE "user_character" ADD CONSTRAINT "FK_d93991827ef18c46b911d2b12d1" FOREIGN KEY ("lightcone_id") REFERENCES "lightcone"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
