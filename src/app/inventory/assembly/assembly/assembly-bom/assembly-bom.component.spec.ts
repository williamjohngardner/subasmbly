import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyBomComponent } from './assembly-bom.component';

describe('AssemblyBomComponent', () => {
  let component: AssemblyBomComponent;
  let fixture: ComponentFixture<AssemblyBomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssemblyBomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssemblyBomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
