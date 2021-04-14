import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsSavedContainerComponent } from './contacts-saved-container.component';

describe('ContactsSavedContainerComponent', () => {
  let component: ContactsSavedContainerComponent;
  let fixture: ComponentFixture<ContactsSavedContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsSavedContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsSavedContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
