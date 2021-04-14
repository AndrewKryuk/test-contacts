import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDialogsBoolComponent } from './shared-dialogs-bool.component';

describe('SharedDialogsBoolComponent', () => {
  let component: SharedDialogsBoolComponent;
  let fixture: ComponentFixture<SharedDialogsBoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedDialogsBoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedDialogsBoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
