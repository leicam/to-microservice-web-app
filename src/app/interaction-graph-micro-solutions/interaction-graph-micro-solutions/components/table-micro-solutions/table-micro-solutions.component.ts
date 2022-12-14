import { Component, Input, OnInit } from '@angular/core';

export interface MicroSolutionsTable {
  microService: string;
  metric: string;
  value: string;
  trace: string;
}

@Component({
  selector: 'app-table-micro-solutions',
  templateUrl: './table-micro-solutions.component.html',
  styleUrls: ['./table-micro-solutions.component.scss']
})

export class TableMicroSolutionsComponent implements OnInit {
  @Input() tabelaVisivel: boolean = false

  arrayMicroSolutions: Array<MicroSolutionsTable> = [
    {
      microService: 'microservice0',
      metric: 'OverheadMaxPerMicroserviceArchitecture',
      value: '240.0',
      trace: 'teste.gerado.ManterAluno#Method:executar#SizeOf:30#Deep:1#Thread:main'
    },
    {
      microService: 'microservice0',
      metric: 'FunctionalityPerMicroserviceArchitecture',
      value: '3.041',
      trace: 'teste.gerado.ManterAluno#Method:executar#SizeOf:30#Deep:1#Thread:main'
    },
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
      microService: 'microservice1',
      metric: 'OverheadMaxPerMicroserviceArchitecture',
      value: '240.0',
      trace: 'teste.gerado.ManterLivro#Method:executar1#SizeOf:30#Deep:2#Thread:main'
    },
    {
      microService: 'microservice1',
      metric: 'OverheadMaxPerMicroserviceArchitecture',
      value: '240.0',
      trace: 'teste.gerado.ManterAluno#Method:executar#SizeOf:30#Deep:1#Thread:main'
    },
    {
      microService: 'microservice1',
      metric: 'FunctionalityPerMicroserviceArchitecture',
      value: '3.041',
      trace: 'teste.gerado.ManterLivro#Method:executar1#SizeOf:30#Deep:2#Thread:main'
    },
    {
      microService: 'microservice2',
      metric: 'FunctionalityPerMicroserviceArchitecture',
      value: '3.041',
      trace: 'teste.gerado.ManterLivro#Method:executar1#SizeOf:30#Deep:2#Thread:main'
    },
    {
      microService: 'microservice2',
      metric: 'OverheadMaxPerMicroserviceArchitecture',
      value: '240.0',
      trace: 'teste.gerado.ManterLivro#Method:executar#SizeOf:30#Deep:1#Thread:main'
    },
    {
      microService: 'microservice2',
      metric: 'FunctionalityPerMicroserviceArchitecture',
      value: '3.041',
      trace: 'teste.gerado.ManterLivro#Method:executar1#SizeOf:30#Deep:2#Thread:main'
    },
  ];

  constructor() { }

  ngOnInit(): void { }

  filter(event: any, matchMode: any) {
    this.arrayMicroSolutions.filter(element => {
      element = event
    })
  }

}