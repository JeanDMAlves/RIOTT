import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActivityCardComponent } from './list-activity-card.component';

describe('ListActivityCardComponent', () => {
  let component: ListActivityCardComponent;
  let fixture: ComponentFixture<ListActivityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListActivityCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListActivityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
