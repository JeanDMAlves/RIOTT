import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMemberAbsencesComponent } from './list-member-absences.component';

describe('ListMemberAbsencesComponent', () => {
  let component: ListMemberAbsencesComponent;
  let fixture: ComponentFixture<ListMemberAbsencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMemberAbsencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMemberAbsencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
