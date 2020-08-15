import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubassemblyComponent } from './create-subassembly.component';

describe('CreateSubassemblyComponent', () => {
  let component: CreateSubassemblyComponent;
  let fixture: ComponentFixture<CreateSubassemblyComponent>;

  beforeEach(async(() => {
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
