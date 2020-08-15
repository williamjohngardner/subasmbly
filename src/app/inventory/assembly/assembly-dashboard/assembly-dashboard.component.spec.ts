import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyDashboardComponent } from './assembly-dashboard.component';

describe('AssemblyDashboardComponent', () => {
  let component: AssemblyDashboardComponent;
  let fixture: ComponentFixture<AssemblyDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssemblyDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssemblyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
