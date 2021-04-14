import {createEntityAdapter} from '@ngrx/entity';
import {ContactEntity} from '../../shared/shared-contacts/entities/contact.entity';
import {SubscriptionConfiguratorFeatureState} from '../index';
import {selectSubscriptionConfiguratorFeatureState} from '../state-selector';

export const contactsEntityAdapter = createEntityAdapter<ContactEntity>({selectId: entity => entity.email});

export const contactsEntitySelectors = contactsEntityAdapter.getSelectors(
  (state: SubscriptionConfiguratorFeatureState) => selectSubscriptionConfiguratorFeatureState(state).contacts,
);
