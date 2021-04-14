import {Component, OnDestroy} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Subject} from 'rxjs';
import {debounceTime, takeUntil} from 'rxjs/operators';
import {SubscriptionConfiguratorFeatureState} from '../../../../store';
import {ContactsActions} from '../../../../store/contacts/actions';

@Component({
  selector:    'app-shared-contacts-search-form',
  templateUrl: './shared-contacts-search-form.component.html',
  styleUrls:   ['./shared-contacts-search-form.component.scss'],
})
export class SharedContactsSearchFormComponent implements OnDestroy {
  readonly formControl = new FormControl('');
  private readonly destroy$ = new Subject();

  constructor(private store$: Store<SubscriptionConfiguratorFeatureState>) {
    this.formControl.valueChanges.pipe(
      debounceTime(1000),
      takeUntil(this.destroy$),
    ).subscribe(value => {
      if (value.length > 2) {
        this.store$.dispatch(ContactsActions.willFetchSearchContacts({ q: value }));
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
