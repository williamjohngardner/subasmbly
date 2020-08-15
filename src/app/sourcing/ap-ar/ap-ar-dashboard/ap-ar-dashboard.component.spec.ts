import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApArDashboardComponent } from './ap-ar-dashboard.component';

describe('ApArDashboardComponent', () => {
  let component: ApArDashboardComponent;
  let fixture: ComponentFixture<ApArDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApArDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApArDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
