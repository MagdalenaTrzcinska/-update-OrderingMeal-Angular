import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingDetailsComponent } from './ordering-details.component';

describe('OrderingDetailsComponent', () => {
  let component: OrderingDetailsComponent;
  let fixture: ComponentFixture<OrderingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
