import {createReducer, on} from '@ngrx/store';
import {contactsEntityAdapter as adapter} from './entity-adapter';
import {ContactsActions as actions} from './actions';


export const contactsReducer = createReducer(
  adapter.getInitialState(),

  on(actions.setOne, (state, { contact }) => adapter.setOne(contact, state)),
  on(actions.setAll, (state, { contacts }) => adapter.setAll(contacts, state)),
  on(actions.removeAll, state => adapter.removeAll(state)),
);
