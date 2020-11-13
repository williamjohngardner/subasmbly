import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PartDashboardComponent } from './part-dashboard.component';

describe('PartDashboardComponent', () => {
  let component: PartDashboardComponent;
  let fixture: ComponentFixture<PartDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PartDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
