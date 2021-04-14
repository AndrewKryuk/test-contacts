import {createAction, props} from '@ngrx/store';
import {ContactEntity} from '../../shared/shared-contacts/entities/contact.entity';

const ACTION_PREFIX = '[Contact List]';

export namespace ContactsActions {
  export const willFetchSavedContacts = createAction(`${ACTION_PREFIX} will fetch saved contacts`);
  export const willFetchSearchContacts = createAction(`${ACTION_PREFIX} will fetch search contacts`, props<{ q: string }>());
  export const contactsWereNotFetched = createAction(`${ACTION_PREFIX} contacts were not fetched`);
  export const willRemoveContact = createAction(`${ACTION_PREFIX} will remove search contact`, props<{ contact: ContactEntity }>());
  export const willSaveContact = createAction(`${ACTION_PREFIX} will save search contact`, props<{ contact: ContactEntity }>());


  export const setOne = createAction(`${ACTION_PREFIX} set one`, props<{ contact: ContactEntity }>());
  export const setAll = createAction(`${ACTION_PREFIX} set all`, props<{ contacts: ContactEntity[] }>());
  export const removeAll = createAction(`${ACTION_PREFIX} remove all`);
}
