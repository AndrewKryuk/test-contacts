import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {subscriptionConfiguratorFeatureEffects, subscriptionConfiguratorFeatureReducers} from '../../store';
import {SubscriptionConfiguratorFeatureKey} from '../../store/state-selector';
import {SharedDialogsModule} from '../shared-dialogs/shared-dialogs.module';
import {SharedMaterialModule} from '../shared-material/shared-material.module';
import { SharedContactsTableComponent } from './components/shared-contacts-table/shared-contacts-table.component';
import { SharedContactsSearchFormComponent } from './components/shared-contacts-search-form/shared-contacts-search-form.component';



@NgModule({
  declarations: [
    SharedContactsTableComponent,
    SharedContactsSearchFormComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    SharedDialogsModule,
    StoreModule.forFeature(SubscriptionConfiguratorFeatureKey, subscriptionConfiguratorFeatureReducers),
    EffectsModule.forFeature(subscriptionConfiguratorFeatureEffects),
    ReactiveFormsModule,
  ],
  exports: [
    SharedContactsTableComponent,
    SharedContactsSearchFormComponent,
  ],
})
export class SharedContactsModule { }
