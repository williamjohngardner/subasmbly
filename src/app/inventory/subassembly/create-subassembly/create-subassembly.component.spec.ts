import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateSubassemblyComponent } from './create-subassembly.component';

describe('CreateSubassemblyComponent', () => {
  let component: CreateSubassemblyComponent;
  let fixture: ComponentFixture<CreateSubassemblyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSubassemblyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubassemblyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
