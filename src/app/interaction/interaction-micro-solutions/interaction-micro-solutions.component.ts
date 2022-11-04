import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interaction-micro-solutions',
  templateUrl: './interaction-micro-solutions.component.html',
  styleUrls: ['./interaction-micro-solutions.component.scss']
})
export class InteractionMicroSolutionsComponent implements OnInit {

  nameUser = 'user01'

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async navigateToGraph() {
    await this.router.navigate(['interaction-graph'])
  }
}
