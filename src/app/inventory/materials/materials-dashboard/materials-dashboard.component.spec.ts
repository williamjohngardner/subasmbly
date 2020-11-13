import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MaterialsDashboardComponent } from './materials-dashboard.component';

describe('MaterialsDashboardComponent', () => {
  let component: MaterialsDashboardComponent;
  let fixture: ComponentFixture<MaterialsDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
