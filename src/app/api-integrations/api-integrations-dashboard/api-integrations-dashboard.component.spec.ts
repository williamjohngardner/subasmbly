import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiIntegrationsDashboardComponent } from './api-integrations-dashboard.component';

describe('ApiIntegrationsDashboardComponent', () => {
  let component: ApiIntegrationsDashboardComponent;
  let fixture: ComponentFixture<ApiIntegrationsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiIntegrationsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiIntegrationsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
