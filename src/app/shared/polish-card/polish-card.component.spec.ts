import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolishCardComponent } from './polish-card.component';

describe('PolishCardComponent', () => {
  let component: PolishCardComponent;
  let fixture: ComponentFixture<PolishCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolishCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolishCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
