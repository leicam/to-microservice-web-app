import { Component, OnInit } from '@angular/core';
import { Type, } from '../../Model/Type';
import { Microservice, } from '../../Model/Microservice';

@Component({
  selector: 'app-microservice-candidate-list',
  templateUrl: './microservice-candidate-list.component.html',
  styleUrls: ['./microservice-candidate-list.component.css']
})

export class MicroserviceCandidateListComponent {
  public microservices: Microservice[] = [
    {
      number: 1,
      name: 'Person',
      types: [ Type.NotEvaluated, ],
    },
    {
      number: 2,
      name: 'Product',
      types: [ Type.NotEvaluated, ],
    },
    {
      number: 3,
      name: 'Sale',
      types: [ Type.NotEvaluated, ],
    },
  ];
}