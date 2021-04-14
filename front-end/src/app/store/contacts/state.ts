import {EntityState} from '@ngrx/entity';
import {ContactEntity} from '../../shared/shared-contacts/entities/contact.entity';

export type ContactsState = EntityState<ContactEntity>;
