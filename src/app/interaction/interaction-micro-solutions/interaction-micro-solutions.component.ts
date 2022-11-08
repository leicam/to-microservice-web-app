import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-interaction-micro-solutions',
  templateUrl: './interaction-micro-solutions.component.html',
  styleUrls: ['./interaction-micro-solutions.component.scss'],
  providers: [MessageService]
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
    this.messageService.add({key: 'bc', severity:'success', summary: 'Success', detail: 'Candidate solutions for microservices successfully evaluated!'});
  }

  addSingle() {
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
  }

  addMultiple() {
    this.messageService.addAll([{severity:'success', summary:'Service Message', detail:'Via MessageService'},
                                {severity:'info', summary:'Info Message', detail:'Via MessageService'}]);
  }

  showSticky() {
    this.messageService.add({severity:'info', summary: 'Sticky', detail: 'Message Content', sticky: true});
  }

  onConfirm() {
    this.messageService.clear('c');
  }

  onReject() {
    this.messageService.clear('c');
  }

  clear() {
    this.messageService.clear();
  }
}