import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpService} from '../../../common/services/http.service';
import {ContactEntity} from '../entities/contact.entity';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(
    private http: HttpService,
  ) {}

  getSavedContacts$(): Observable<ApiResponse<ContactEntity[]>> {
    return this.http.get$<ContactEntity[]>('/contacts/').pipe(
      map((data: ApiResponse<ContactEntity[]>)  => data),
    );
  }

  getSearchContacts$(q: string): Observable<ApiResponse<ContactEntity[]>> {
    return this.http.get$<ContactEntity[]>('/contacts/search/', {q}).pipe(
      map((data: ApiResponse<ContactEntity[]>)  => data),
    );
  }

  deleteContact$(contact: ContactEntity): Observable<ApiResponse<void>> {
    return this.http.delete$(`/contacts/${contact.id}`);
  }

  saveContact$(contact: ContactEntity): Observable<ApiResponse<ContactEntity>> {
    return this.http.post$(`/contacts/`, {...contact});
  }

  makeMany(contacts: JsonObject<ContactEntity>[]) : ContactEntity[] {
    return contacts.map(c => {
      const entity = new ContactEntity();
      entity.fromJson(c);
      return entity;
    });
  }

  makeOne(contact: JsonObject<ContactEntity>): ContactEntity {
    const entity = new ContactEntity();
    entity.fromJson(contact);
    return entity;
  }
}
