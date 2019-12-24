import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecePartComponent } from './piece-part.component';

describe('PiecePartComponent', () => {
  let component: PiecePartComponent;
  let fixture: ComponentFixture<PiecePartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiecePartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiecePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
