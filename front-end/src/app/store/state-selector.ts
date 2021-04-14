import {createFeatureSelector} from '@ngrx/store';
import {SubscriptionConfiguratorFeatureState} from './index';

export const SubscriptionConfiguratorFeatureKey = 'subscriptionConfiguratorFeature';
export const selectSubscriptionConfiguratorFeatureState = createFeatureSelector<SubscriptionConfiguratorFeatureState>(SubscriptionConfiguratorFeatureKey);
