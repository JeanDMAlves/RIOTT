import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMemberItemComponent } from './list-member-item.component';

describe('ListMemberItemComponent', () => {
  let component: ListMemberItemComponent;
  let fixture: ComponentFixture<ListMemberItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMemberItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMemberItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
