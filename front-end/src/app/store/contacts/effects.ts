import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {switchMap, map, filter} from 'rxjs/operators';
import {ContactEntity} from '../../shared/shared-contacts/entities/contact.entity';
import {ContactsService} from '../../shared/shared-contacts/services/contacts.service';
import {SubscriptionConfiguratorFeatureState} from '../index';
import {ContactsActions} from './actions';

@Injectable()
export class ContactsEffects {

  fetchSavedContacts$ = createEffect(() => this.actions$.pipe(
    ofType(ContactsActions.willFetchSavedContacts),
    switchMap(() =>
      this.contactsService.getSavedContacts$().pipe(
        filter(data => !!data),
        map(({ data: contacts }) => {
            contacts = contacts.map(c => {
              const entity = new ContactEntity();
              entity.fromJson(c);
              return entity;
            });
            return ContactsActions.setAll({ contacts });
          },
        ),
      ),
    ),
  ));

  fetchSearchContacts$ = createEffect(() => this.actions$.pipe(
    ofType(ContactsActions.willFetchSearchContacts),
    switchMap(({ q }) =>
      this.contactsService.getSearchContacts$(q).pipe(
        filter(data => !!data),
        map(({ data: contacts }) => {
            contacts = contacts.map(c => {
              const entity = new ContactEntity();
              entity.fromJson(c);
              return entity;
            });
            return ContactsActions.setAll({ contacts });
          },
        ),
      ),
    ),
  ));

  removeContact$ = createEffect(() => this.actions$.pipe(
    ofType(ContactsActions.willRemoveContact),
    switchMap(({ contact }) =>
      this.contactsService.deleteContact$(contact).pipe(
        map(() => {
            contact.status = 'deleted';
            return ContactsActions.setOne({ contact });
          },
        ),
      ),
    ),
  ));

  saveContact$ = createEffect(() => this.actions$.pipe(
    ofType(ContactsActions.willSaveContact),
    switchMap(({ contact }) =>
      this.contactsService.saveContact$(contact).pipe(
        map(({ data }) => {
            data.status = 'saved';
            const contact = new ContactEntity();
            contact.fromJson(data);
            return ContactsActions.setOne({ contact });
          },
        ),
      ),
    ),
  ));


  constructor(
    private readonly actions$: Actions,
    private readonly store$: Store<SubscriptionConfiguratorFeatureState>,
    private contactsService: ContactsService,
  ) {
  }

}
