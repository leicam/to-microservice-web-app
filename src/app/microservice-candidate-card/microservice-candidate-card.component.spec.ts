import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroserviceCandidateCardComponent } from './microservice-candidate-card.component';

describe('MicroserviceCandidateCardComponent', () => {
  let component: MicroserviceCandidateCardComponent;
  let fixture: ComponentFixture<MicroserviceCandidateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroserviceCandidateCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicroserviceCandidateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
