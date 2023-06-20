import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowActionNotesDialogComponent } from './show-action-notes-dialog.component';

describe('ShowActionNotesDialogComponent', () => {
  let component: ShowActionNotesDialogComponent;
  let fixture: ComponentFixture<ShowActionNotesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowActionNotesDialogComponent]
    });
    fixture = TestBed.createComponent(ShowActionNotesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
