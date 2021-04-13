import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CsvModule} from 'nest-csv-parser';
import {ContactsController} from './controller/contacts.controller';
import {Contact} from './entities/contact.entity';
import {ContactsService} from './service/contacts/contacts.service';
import {CsvParserService} from './service/csv-parser/csv-parser.service';

@Module({
  imports:     [CsvModule, TypeOrmModule.forFeature([Contact])],
  controllers: [ContactsController],
  providers:   [ContactsService, CsvParserService],
})
export class ContactsModule {
}
