import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFinishComponent } from './create-finish.component';

describe('CreateFinishComponent', () => {
  let component: CreateFinishComponent;
  let fixture: ComponentFixture<CreateFinishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFinishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
