import {Injectable} from '@nestjs/common';
import * as fs from 'fs';
import {CsvParser} from 'nest-csv-parser';
import {forkJoin, from, Observable} from 'rxjs';
import {filter, map, mergeMap} from 'rxjs/operators';
import {ContactDto} from '../../dto/contact.dto';
import {ContactsService} from '../contacts/contacts.service';

@Injectable()
export class CsvParserService {
  private readonly csvPath: string = '/home/node/contacts.csv';
  private csvParserConfig = {
    separator:  ';',
    mapHeaders: ({ header }) => {
      switch (header.trim()) {
        case 'First Names':
          return 'firstName';
        case 'Last names':
          return 'lastName';
        case 'Company':
          return 'company';
        case 'email':
          return 'email';
        case 'Address':
          return 'address';
        case 'City':
          return 'city';
        case 'State':
          return 'state';
        case 'Zip':
          return 'zip';
        case 'Country':
          return 'country';
        case 'Title':
          return 'title';
        case 'Phone':
          return 'phone';
        case 'Contact Name':
          return 'contactName';
        default:
          return null;
      }
    },
    strict:     false,
  };

  constructor(
    private readonly csvParser: CsvParser,
    private contactsService: ContactsService,
  ) {
  }

  search$(query: string): Observable<ContactDto[]> {
    const stream = fs.createReadStream(this.csvPath);
    return from(this.csvParser.parse(stream, ContactDto, null, null, this.csvParserConfig))
      .pipe(
        filter(({list}) => !!list),
        mergeMap(({list}) => {
          list = this.filterByQuery(list, query);
          return this.getStatus$(list);
        })
      );
  }

  protected filterByQuery(list: ContactDto[], query: string) : ContactDto[] {
    return list.filter((contact: ContactDto) =>
      (contact.contactName || '').toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
      (contact.email || '').toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
      (contact.company || '').toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }

  protected getStatus$(list: ContactDto[]) : Observable<ContactDto[]> {
    return forkJoin(list.map((contact: ContactDto) =>
      this.contactsService.findOne$(
        contact,
      ).pipe(
        map((foundContact: ContactDto) => {
        if (!!foundContact) {
          return foundContact;
        }

        return contact;
      })
      ),
    ));
  }
}
