import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWorkflowNotesDialogComponent } from './show-workflow-notes-dialog.component';

describe('ShowWorkflowNotesDialogComponent', () => {
  let component: ShowWorkflowNotesDialogComponent;
  let fixture: ComponentFixture<ShowWorkflowNotesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowWorkflowNotesDialogComponent]
    });
    fixture = TestBed.createComponent(ShowWorkflowNotesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
