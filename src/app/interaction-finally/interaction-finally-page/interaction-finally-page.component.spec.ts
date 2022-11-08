import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionFinallyPageComponent } from './interaction-finally-page.component';

describe('InteractionFinallyPageComponent', () => {
  let component: InteractionFinallyPageComponent;
  let fixture: ComponentFixture<InteractionFinallyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionFinallyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractionFinallyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
