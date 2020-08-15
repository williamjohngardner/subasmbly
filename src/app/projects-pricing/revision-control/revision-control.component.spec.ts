import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionControlComponent } from './revision-control.component';

describe('RevisionControlComponent', () => {
  let component: RevisionControlComponent;
  let fixture: ComponentFixture<RevisionControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
