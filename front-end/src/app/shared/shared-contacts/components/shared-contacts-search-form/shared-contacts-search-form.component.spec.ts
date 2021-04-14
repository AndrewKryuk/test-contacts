import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedContactsSearchFormComponent } from './shared-contacts-search-form.component';

describe('SharedContactsSearchFormComponent', () => {
  let component: SharedContactsSearchFormComponent;
  let fixture: ComponentFixture<SharedContactsSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedContactsSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedContactsSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
