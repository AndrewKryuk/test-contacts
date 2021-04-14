import { NgModule } from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {AppEffects} from './app.effects';
import {AppReducers} from './app.reducer';



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(AppReducers, {
      runtimeChecks: {
        strictStateImmutability:  false,
        strictActionImmutability: false,
      },
    }),
    EffectsModule.forRoot(AppEffects),
    StoreRouterConnectingModule.forRoot(),
  ]
})
export class AppStoreModule { }
