import {Component, OnDestroy, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Store} from '@ngrx/store';
import {SubscriptionConfiguratorFeatureState} from '../../../store';
import {ContactsActions} from '../../../store/contacts/actions';

@Component({
  selector: 'app-contacts-search-container',
  templateUrl: './contacts-search-container.component.html',
  styleUrls: ['./contacts-search-container.component.scss']
})
export class ContactsSearchContainerComponent implements OnDestroy {

  constructor(private titleService:Title, private store$: Store<SubscriptionConfiguratorFeatureState>) {
    this.titleService.setTitle('Search contacts');
  }

  ngOnDestroy(): void {
    this.store$.dispatch(ContactsActions.removeAll());
  }

}
