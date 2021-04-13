import {MigrationInterface, QueryRunner} from "typeorm";

export class ContactsList1618246745383 implements MigrationInterface {
    name = 'ContactsList1618246745383'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `contacts_list` (`created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `first_name` varchar(255) NOT NULL, `last_name` varchar(255) NOT NULL, `company` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `address` varchar(255) NOT NULL, `city` varchar(255) NOT NULL, `state` varchar(255) NOT NULL, `zip` varchar(255) NOT NULL, `country` varchar(255) NOT NULL, `title` varchar(255) NOT NULL, `phone` varchar(255) NOT NULL, `contact_name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `contacts_list`");
    }

}
