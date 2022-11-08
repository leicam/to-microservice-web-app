import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-interaction-micro-solutions',
  templateUrl: './interaction-micro-solutions.component.html',
  styleUrls: ['./interaction-micro-solutions.component.scss']
})
export class InteractionMicroSolutionsComponent implements OnInit {

  nameUser = 'user01'

  constructor(private router: Router, private messageService : MessageService) { }

  ngOnInit(): void {
  }

  async navigateToGraph() {
    await this.router.navigate(['interaction-graph'])
  }

  async navigateToFinally() {
    await this.router.navigate(['interaction-finally'])
  }

  addSingle() {
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
  }

  addMultiple() {
    this.messageService.addAll([{severity:'success', summary:'Service Message', detail:'Via MessageService'},
                                {severity:'info', summary:'Info Message', detail:'Via MessageService'}]);
  }

  clear() {
    this.messageService.clear();
  }
}