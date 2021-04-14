import {ActionReducerMap} from '@ngrx/store';
import {ContactsEffects} from './contacts/effects';
import {contactsReducer} from './contacts/reducer';
import {ContactsState} from './contacts/state';

export interface SubscriptionConfiguratorFeatureState {
  contacts: ContactsState;
}

export const subscriptionConfiguratorFeatureReducers: ActionReducerMap<SubscriptionConfiguratorFeatureState> = {
  contacts: contactsReducer,
};

export const subscriptionConfiguratorFeatureEffects = [
  ContactsEffects,
];
