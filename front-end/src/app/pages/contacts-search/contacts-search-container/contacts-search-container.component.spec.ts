import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsSearchContainerComponent } from './contacts-search-container.component';

describe('ContactsSearchContainerComponent', () => {
  let component: ContactsSearchContainerComponent;
  let fixture: ComponentFixture<ContactsSearchContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsSearchContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsSearchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
