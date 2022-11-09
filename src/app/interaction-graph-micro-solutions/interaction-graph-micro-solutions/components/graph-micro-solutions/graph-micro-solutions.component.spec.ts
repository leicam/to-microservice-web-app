import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphMicroSolutionsComponent } from './graph-micro-solutions.component';

describe('GraphMicroSolutionsComponent', () => {
  let component: GraphMicroSolutionsComponent;
  let fixture: ComponentFixture<GraphMicroSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphMicroSolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphMicroSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
