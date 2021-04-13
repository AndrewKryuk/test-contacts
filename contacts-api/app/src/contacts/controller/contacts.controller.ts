import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import {Observable} from 'rxjs';
import {QueryDto} from '../../core/dto/query.dto';
import {ContactDto} from '../dto/contact.dto';
import {ContactsService} from '../service/contacts/contacts.service';
import {CsvParserService} from '../service/csv-parser/csv-parser.service';

@Controller('contacts')
export class ContactsController {
  constructor(private csvParserService: CsvParserService, private contactService: ContactsService) {
  }

  @Get('/')
  findAll(): Observable<ContactDto[]> {
    return this.contactService.findAll$();
  }

  @Post('/')
  create(@Body() contact: ContactDto): Observable<ContactDto> {
    return this.contactService.create$(contact);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.contactService.remove(id);
  }

  @Get('search')
  search(@Query() { q }: QueryDto): Observable<ContactDto[]> {
    return this.csvParserService.search$(q);
  }

}
