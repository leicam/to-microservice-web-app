import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-micro-solutions',
  templateUrl: './graph-micro-solutions.component.html',
  styleUrls: ['./graph-micro-solutions.component.scss']
})

export class GraphMicroSolutionsComponent implements OnInit {

  @Input() graphVisivel: boolean = false

  link = [
    {
      id: 'a',
      source: 'first',
      target: 'second',
      label: 'is parent of'
    }, {
      id: 'b',
      source: 'first',
      target: 'third',
      label: 'custom label'
    }
  ];

  node = [
    {
      id: 'first',
      label: 'A'
    }, {
      id: 'second',
      label: 'B'
    }, {
      id: 'third',
      label: 'C'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}