import { MigrationInterface, QueryRunner,Table } from "typeorm"

export class PostRefactoring1678196888680 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "images",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "image",
                        type: "varchar",
                    },
                ],
            }),
            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("images")
    }

}
