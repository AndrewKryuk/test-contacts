import {Component, OnDestroy, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Store} from '@ngrx/store';
import {SubscriptionConfiguratorFeatureState} from '../../../store';
import {ContactsActions} from '../../../store/contacts/actions';

@Component({
  selector: 'app-contacts-saved-container',
  templateUrl: './contacts-saved-container.component.html',
  styleUrls: ['./contacts-saved-container.component.scss']
})
export class ContactsSavedContainerComponent implements OnInit, OnDestroy {

  constructor(private titleService:Title, private store$: Store<SubscriptionConfiguratorFeatureState>) {
    this.titleService.setTitle('Saved contacts');
  }

  ngOnInit(): void {
    this.store$.dispatch(ContactsActions.willFetchSavedContacts());
  }

  ngOnDestroy(): void {
    this.store$.dispatch(ContactsActions.removeAll());
  }

}
