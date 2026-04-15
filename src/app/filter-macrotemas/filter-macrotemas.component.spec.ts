import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMacrotemasComponent } from './filter-macrotemas.component';

describe('FilterMacrotemasComponent', () => {
  let component: FilterMacrotemasComponent;
  let fixture: ComponentFixture<FilterMacrotemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterMacrotemasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterMacrotemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
