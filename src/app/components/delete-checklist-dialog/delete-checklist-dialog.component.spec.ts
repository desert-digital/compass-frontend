import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteChecklistDialogComponent } from './delete-checklist-dialog.component';

describe('DeleteChecklistDialogComponent', () => {
  let component: DeleteChecklistDialogComponent;
  let fixture: ComponentFixture<DeleteChecklistDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteChecklistDialogComponent]
    });
    fixture = TestBed.createComponent(DeleteChecklistDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
