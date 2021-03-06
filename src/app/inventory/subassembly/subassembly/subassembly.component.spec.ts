import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubassemblyComponent } from './subassembly.component';

describe('SubassemblyComponent', () => {
  let component: SubassemblyComponent;
  let fixture: ComponentFixture<SubassemblyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubassemblyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubassemblyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
