import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingDashboardComponent } from './pricing-dashboard.component';

describe('PricingDashboardComponent', () => {
  let component: PricingDashboardComponent;
  let fixture: ComponentFixture<PricingDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
