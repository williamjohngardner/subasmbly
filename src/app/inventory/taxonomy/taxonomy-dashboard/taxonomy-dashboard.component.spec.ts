import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TaxonomyDashboardComponent } from './taxonomy-dashboard.component';

describe('TaxonomyDashboardComponent', () => {
  let component: TaxonomyDashboardComponent;
  let fixture: ComponentFixture<TaxonomyDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxonomyDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxonomyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
