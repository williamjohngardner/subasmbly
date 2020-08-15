import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTaxonomyComponent } from './create-taxonomy.component';

describe('CreateTaxonomyComponent', () => {
  let component: CreateTaxonomyComponent;
  let fixture: ComponentFixture<CreateTaxonomyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTaxonomyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTaxonomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
