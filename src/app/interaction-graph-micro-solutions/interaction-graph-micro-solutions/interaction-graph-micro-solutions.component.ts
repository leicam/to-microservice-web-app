import { Component, OnInit } from '@angular/core';
import { MenuItem, TreeNode } from 'primeng/api';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-interaction-graph-micro-solutions',
  templateUrl: './interaction-graph-micro-solutions.component.html',
  styleUrls: ['./interaction-graph-micro-solutions.component.scss']
})

export class InteractionGraphMicroSolutionsComponent implements OnInit{
  items: MenuItem[] = [];

  constructor(private apiService: ApiService) { }


  ngOnInit(): void {
    this.items = [
      {
        label: 'Microservice 0',
        items: [
          {
            label: 'test.generate.KeepStudentOne.executeFour!KeepStudent!'
          },
          {
            label: 'test.generate.KeepTeacherTwo'
          }
        ]
      },
      {
        label: 'Microservice 1',
        items: [
          {
            label: 'Microservice 1'
          },
          {
            label: 'Microservice 2'
          },
          {
            label: 'Microservice 3'
          },
          {
            label: 'Microservice 4'
          }
        ]
      },
      {
        label: 'Microservice 2',
        items: [
          {
            label: 'Microservice 1'
          },
          {
            label: 'Microservice 2'
          },
          {
            label: 'Microservice 3'
          },
          {
            label: 'Microservice 4'
          }
        ]
      }
    ];
  }
}
