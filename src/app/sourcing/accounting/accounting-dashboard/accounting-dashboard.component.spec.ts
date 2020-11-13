import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccountingDashboardComponent } from './accounting-dashboard.component';

describe('AccountingDashboardComponent', () => {
  let component: AccountingDashboardComponent;
  let fixture: ComponentFixture<AccountingDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
