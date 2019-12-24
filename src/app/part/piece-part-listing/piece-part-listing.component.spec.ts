import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecePartListingComponent } from './piece-part-listing.component';

describe('PiecePartListingComponent', () => {
  let component: PiecePartListingComponent;
  let fixture: ComponentFixture<PiecePartListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiecePartListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiecePartListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
