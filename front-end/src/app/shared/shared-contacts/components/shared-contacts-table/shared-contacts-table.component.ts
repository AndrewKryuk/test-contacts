import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {select, Store} from '@ngrx/store';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {SubscriptionConfiguratorFeatureState} from '../../../../store';
import {ContactsActions} from '../../../../store/contacts/actions';
import {contactsEntitySelectors} from '../../../../store/contacts/entity-adapter';
import {SharedDialogsBoolComponent} from '../../../shared-dialogs/shared-dialogs-bool/shared-dialogs-bool.component';
import {ContactEntity} from '../../entities/contact.entity';

@Component({
  selector:    'app-shared-contacts-table',
  templateUrl: './shared-contacts-table.component.html',
  styleUrls:   ['./shared-contacts-table.component.scss'],
})
export class SharedContactsTableComponent implements AfterViewInit, OnDestroy {
  displayedColumns: string[] = [
    'firstName', 'lastName', 'company', 'email',
    'address', 'city', 'state', 'zip', 'country',
    'title', 'phone', 'contactName', 'actions',
  ];
  dataSource = new MatTableDataSource<ContactEntity>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  private readonly destroy$ = new Subject();

  constructor(public dialog: MatDialog, private store$: Store<SubscriptionConfiguratorFeatureState>,
  ) {
    this.store$.pipe(
      takeUntil(this.destroy$),
      select(contactsEntitySelectors.selectAll),
    ).subscribe(contacts => {
      this.dataSource = new MatTableDataSource<ContactEntity>(contacts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDeletingDialog(contact: ContactEntity): void {
    const text = `Do you want to delete this contact «${contact.contactName}»?`;
    this.openDialog(contact, text).afterClosed().subscribe((result) => {
      if (!!result) {
        this.store$.dispatch(ContactsActions.willRemoveContact({ contact }));
      }
    });
  }

  openSavingDialog(contact: ContactEntity): void {
    const text = `Do you want to save this contact «${contact.contactName}»?`;
    this.openDialog(contact, text).afterClosed().subscribe((result) => {
      if (!!result) {
        this.store$.dispatch(ContactsActions.willSaveContact({ contact }));
      }
    });
  }

  openDialog(contact: ContactEntity, text: string): MatDialogRef<SharedDialogsBoolComponent> {
    return this.dialog.open(SharedDialogsBoolComponent, {
      width: '250px',
      data:  { text, id: contact.id },
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
