import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {PanelMenuModule} from 'primeng/panelmenu';
import { Layout, Edge, Node } from '@swimlane/ngx-graph';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-interaction-graph-micro-solutions',
  templateUrl: './interaction-graph-micro-solutions.component.html',
  styleUrls: ['./interaction-graph-micro-solutions.component.scss']
})

export class InteractionGraphMicroSolutionsComponent implements OnInit{
  tabelaVisivel = false;
  graphVisivel = true;

  items: MenuItem[] = [];

  constructor(private router: Router) { }

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

  async navigateToHome() {
    await this.router.navigateByUrl('/')
  }

  viewGraph() {
    this.graphVisivel = true;
    this.tabelaVisivel = false;
  }

  viewTable() {
    this.graphVisivel = false;
    this.tabelaVisivel = true;
  }
}
