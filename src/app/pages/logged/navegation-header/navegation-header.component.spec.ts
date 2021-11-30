import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegationHeaderComponent } from './navegation-header.component';

describe('NavegationHeaderComponent', () => {
  let component: NavegationHeaderComponent;
  let fixture: ComponentFixture<NavegationHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegationHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
