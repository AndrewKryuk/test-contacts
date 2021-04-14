import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query, UseInterceptors,
} from '@nestjs/common';
import {Observable, of} from 'rxjs';
import {DeleteResult} from 'typeorm';
import {QueryDto} from '../../core/dto/query.dto';
import {TransformInterceptor} from '../../core/interceptors/transform.interceptor';
import {ContactDto} from '../dto/contact.dto';
import {ContactsService} from '../service/contacts/contacts.service';
import {CsvParserService} from '../service/csv-parser/csv-parser.service';

@Controller('contacts')
@UseInterceptors(TransformInterceptor)
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
  remove(@Param('id') id: number): Observable<DeleteResult> {
    return this.contactService.remove$(id);
  }

  @Get('search')
  search(@Query() { q }: QueryDto): Observable<ContactDto[]> {
    return this.csvParserService.search$(q);
  }

}
