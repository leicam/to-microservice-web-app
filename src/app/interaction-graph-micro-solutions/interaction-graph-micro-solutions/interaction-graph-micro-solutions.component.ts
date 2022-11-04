import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-interaction-graph-micro-solutions',
  templateUrl: './interaction-graph-micro-solutions.component.html',
  styleUrls: ['./interaction-graph-micro-solutions.component.scss']
})
export class InteractionGraphMicroSolutionsComponent implements OnInit {
  treeFiles: Array<TreeNode> = [];
  selectedFile!: TreeNode
  visibleSidebar1: boolean = false
  constructor(private apiService: ApiService) { }


  ngOnInit(): void {
    this.visibleSidebar1 = true

  }

}
