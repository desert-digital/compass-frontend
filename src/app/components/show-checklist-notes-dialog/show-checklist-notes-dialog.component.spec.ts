import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowChecklistNotesDialogComponent } from './show-checklist-notes-dialog.component';

describe('ShowChecklistNotesDialogComponent', () => {
  let component: ShowChecklistNotesDialogComponent;
  let fixture: ComponentFixture<ShowChecklistNotesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowChecklistNotesDialogComponent]
    });
    fixture = TestBed.createComponent(ShowChecklistNotesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
