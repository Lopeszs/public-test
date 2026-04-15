import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTemasComponent } from './filter-temas.component';

describe('FilterTemasComponent', () => {
  let component: FilterTemasComponent;
  let fixture: ComponentFixture<FilterTemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterTemasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
