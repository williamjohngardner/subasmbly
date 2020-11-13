import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InventoryDashboardComponent } from './inventory-dashboard.component';

describe('InventoryDashboardComponent', () => {
  let component: InventoryDashboardComponent;
  let fixture: ComponentFixture<InventoryDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
