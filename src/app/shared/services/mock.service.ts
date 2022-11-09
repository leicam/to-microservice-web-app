import { Injectable } from '@angular/core';
import { RespostaListaInteractiveEvaluation } from '../models/interactive-evaluation';

const MOCK_LISTA_INTERACTIVE_EVALUATION: RespostaListaInteractiveEvaluation = {
    listaOcorrencia: [
      {
        id: 1,
        name: 'Cluster 0',
        solutionName: 'Solution 0',
        objectives: 'Objectives: 1, 13, 1241234123',
        ratings: 1,
        evaluated: false
      },
      {
        id: 2,
        name: 'Cluster 0',
        solutionName: 'Solution 0',
        objectives: 'Objectives: 1, 13, 1212',
        ratings: 1,
        evaluated: false
      },

    ]
}

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }

  async listMicroEvaluations(){
    return Promise.resolve(MOCK_LISTA_INTERACTIVE_EVALUATION)
  }
}
