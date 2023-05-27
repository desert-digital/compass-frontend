import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageChecklistsComponent } from './manage-checklists.component';

describe('ManageChecklistsComponent', () => {
  let component: ManageChecklistsComponent;
  let fixture: ComponentFixture<ManageChecklistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageChecklistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageChecklistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
