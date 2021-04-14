import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedContactsTableComponent } from './shared-contacts-table.component';

describe('SharedContactsTableComponent', () => {
  let component: SharedContactsTableComponent;
  let fixture: ComponentFixture<SharedContactsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedContactsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedContactsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
