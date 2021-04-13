import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {from, Observable} from 'rxjs';
import {Repository} from 'typeorm';
import {ContactDto} from '../../dto/contact.dto';
import {Contact} from '../../entities/contact.entity';

@Injectable()
export class ContactsService {
  constructor(@InjectRepository(Contact)
              private contactRepository: Repository<Contact>) {
  }

  create$(contact: ContactDto): Observable<ContactDto> {
    return from(this.contactRepository.save(contact));
  }

  findAll$(): Observable<ContactDto[]> {
    return from(this.contactRepository.find());
  }

  findOne$(contact: ContactDto): Observable<ContactDto> {
    return from(this.contactRepository.findOne({
      where: (({ status, ...o }) => o)(contact),
    }));
  }

  async remove(id: number): Promise<void> {
    await this.contactRepository.delete(id);
  }
}