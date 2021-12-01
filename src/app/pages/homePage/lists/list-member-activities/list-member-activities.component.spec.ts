import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMemberActivitiesComponent } from './list-member-activities.component';

describe('ListMemberActivitiesComponent', () => {
  let component: ListMemberActivitiesComponent;
  let fixture: ComponentFixture<ListMemberActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMemberActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMemberActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
