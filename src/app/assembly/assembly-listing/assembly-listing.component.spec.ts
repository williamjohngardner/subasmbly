import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyListingComponent } from './assembly-listing.component';

describe('AssemblyListingComponent', () => {
  let component: AssemblyListingComponent;
  let fixture: ComponentFixture<AssemblyListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssemblyListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssemblyListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
