import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartListingComponent } from './part-listing.component';

describe('PartListingComponent', () => {
  let component: PartListingComponent;
  let fixture: ComponentFixture<PartListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
