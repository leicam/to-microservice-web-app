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

  arrayMicroSolutions: Array<MicroSolutionsTable> = [
    {
      microService: 'microservice0',
      metric: 'OverheadMaxPerMicroserviceArchitecture',
      value: '240.0',
      trace: 'teste.gerado.ManterAluno#Method:executar#SizeOf:30#Deep:1#Thread:main'
    },
    {
      microService: 'microservice1',
      metric: 'FunctionalityPerMicroserviceArchitecture',
      value: '3.041',
      trace: 'teste.gerado.ManterAluno#Method:executar#SizeOf:30#Deep:1#Thread:main'
    },
    {
      microService: 'microservice2',
      metric: 'OverheadMaxPerMicroserviceArchitecture',
      value: '240.0',
      trace: 'teste.gerado.ManterAluno#Method:executar#SizeOf:30#Deep:1#Thread:main'
    },
    {
      microService: 'microservice3',
      metric: 'FunctionalityPerMicroserviceArchitecture',
      value: '3.041',
      trace: 'teste.gerado.ManterAluno#Method:executar#SizeOf:30#Deep:1#Thread:main'
    },
    {
      microService: 'microservice4',
      metric: 'OverheadMaxPerMicroserviceArchitecture',
      value: '240.0',
      trace: 'teste.gerado.ManterLivro#Method:executar1#SizeOf:30#Deep:2#Thread:main'
    },
    {
      microService: 'microservice5',
      metric: 'OverheadMaxPerMicroserviceArchitecture',
      value: '240.0',
      trace: 'teste.gerado.ManterAluno#Method:executar#SizeOf:30#Deep:1#Thread:main'
    },
    {
      microService: 'microservice6',
      metric: 'FunctionalityPerMicroserviceArchitecture',
      value: '3.041',
      trace: 'teste.gerado.ManterLivro#Method:executar1#SizeOf:30#Deep:2#Thread:main'
    },
    {
      microService: 'microservice7',
      metric: 'FunctionalityPerMicroserviceArchitecture',
      value: '3.041',
      trace: 'teste.gerado.ManterLivro#Method:executar1#SizeOf:30#Deep:2#Thread:main'
    },
    {
      microService: 'microservice8',
      metric: 'OverheadMaxPerMicroserviceArchitecture',
      value: '240.0',
      trace: 'teste.gerado.ManterLivro#Method:executar#SizeOf:30#Deep:1#Thread:main'
    },
    {
      microService: 'microservice9',
      metric: 'FunctionalityPerMicroserviceArchitecture',
      value: '3.041',
      trace: 'teste.gerado.ManterLivro#Method:executar1#SizeOf:30#Deep:2#Thread:main'
    },
  ];

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
            label: 'Microservice 2'
          },
          {
            label: 'teste.gerado.ManterAluno#Method:executar#SizeOf:30#Deep:1#Thread:main'
          },
          {
            label: 'teste.gerado.ManterLivro#Method:executar1#SizeOf:30#Deep:2#Thread:main'
          },
          {
            label: 'teste.gerado.ManterAluno#Method:executar#SizeOf:30#Deep:1#Thread:main'
          }
        ]
      },
      {
        label: 'Microservice 2',
        items: [
          {
            label: 'test.generate.KeepStudentOne.executeFour!KeepStudent!'
          },
          {
            label: 'teste.gerado.ManterAluno#Method:executar#SizeOf:30#Deep:1#Thread:main'
          },
          {
            label: 'Microservice 0'
          },
          {
            label: 'teste.gerado.ManterLivro#Method:executar1#SizeOf:30#Deep:2#Thread:main'
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
