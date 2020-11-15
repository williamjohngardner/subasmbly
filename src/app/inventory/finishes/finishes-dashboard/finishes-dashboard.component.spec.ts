import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishesDashboardComponent } from './finishes-dashboard.component';

describe('FinishesDashboardComponent', () => {
  let component: FinishesDashboardComponent;
  let fixture: ComponentFixture<FinishesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishesDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
