import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteActionDialogComponent } from './delete-action-dialog.component';

describe('DeleteActionDialogComponent', () => {
  let component: DeleteActionDialogComponent;
  let fixture: ComponentFixture<DeleteActionDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteActionDialogComponent]
    });
    fixture = TestBed.createComponent(DeleteActionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
