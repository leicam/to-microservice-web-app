import { Component, Input, OnInit } from '@angular/core';
import { Microservice, } from '../../Model/Microservice';

@Component({
  selector: 'app-microservice-candidate-card',
  templateUrl: './microservice-candidate-card.component.html',
  styleUrls: ['./microservice-candidate-card.component.css']
})

export class MicroserviceCandidateCardComponent{
  @Input('microservice')
  public microservice!: Microservice;

  public leadingZero(value: String | Number, size: Number = 3) : String{
    let s = String(value);
  
    while(s.length < (size || 2)){
      s = "0" + s;
    }
  
    return s;
  };
}