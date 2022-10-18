import { MigrationInterface, QueryRunner } from "typeorm"

export class migrations1666046618643 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        `ALTER TABLE "photo" RENAME COLUMN "description" TO "descriptions"`
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        `ALTER TABLE "photo" RENAME COLUMN "description" TO "descriptions"`
    }

}
