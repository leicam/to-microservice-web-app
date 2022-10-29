import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroserviceCandidateListComponent } from './microservice-candidate-list.component';

describe('MicroserviceCandidateListComponent', () => {
  let component: MicroserviceCandidateListComponent;
  let fixture: ComponentFixture<MicroserviceCandidateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroserviceCandidateListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicroserviceCandidateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
