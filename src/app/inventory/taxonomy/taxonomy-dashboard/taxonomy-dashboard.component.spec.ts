import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxonomyDashboardComponent } from './taxonomy-dashboard.component';

describe('TaxonomyDashboardComponent', () => {
  let component: TaxonomyDashboardComponent;
  let fixture: ComponentFixture<TaxonomyDashboardComponent>;

  beforeEach(async(() => {
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
