import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AssemblyComponent } from './assembly.component';

describe('AssemblyComponent', () => {
  let component: AssemblyComponent;
  let fixture: ComponentFixture<AssemblyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssemblyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssemblyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
