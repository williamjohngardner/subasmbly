import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubassemblyListingComponent } from './subassembly-listing.component';

describe('SubassemblyListingComponent', () => {
  let component: SubassemblyListingComponent;
  let fixture: ComponentFixture<SubassemblyListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubassemblyListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubassemblyListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
