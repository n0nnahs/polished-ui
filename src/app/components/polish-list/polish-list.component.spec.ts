import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolishListComponent } from './polish-list.component';

describe('PolishListComponent', () => {
  let component: PolishListComponent;
  let fixture: ComponentFixture<PolishListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolishListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
