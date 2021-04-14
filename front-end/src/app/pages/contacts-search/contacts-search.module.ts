import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedContactsModule} from '../../shared/shared-contacts/shared-contacts.module';
import {SharedMaterialModule} from '../../shared/shared-material/shared-material.module';
import { ContactsSearchContainerComponent } from './contacts-search-container/contacts-search-container.component';
import {routes} from './routes';



@NgModule({
  declarations: [
    ContactsSearchContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedMaterialModule,
    SharedContactsModule
  ]
})
export class ContactsSearchModule { }
