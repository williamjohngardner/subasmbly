import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAssemblyComponent } from './search-assembly.component';

describe('SearchAssemblyComponent', () => {
  let component: SearchAssemblyComponent;
  let fixture: ComponentFixture<SearchAssemblyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAssemblyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAssemblyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
