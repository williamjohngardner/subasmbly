import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubassemblyDashboardComponent } from './subassembly-dashboard.component';

describe('SubassemblyDashboardComponent', () => {
  let component: SubassemblyDashboardComponent;
  let fixture: ComponentFixture<SubassemblyDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubassemblyDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubassemblyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
