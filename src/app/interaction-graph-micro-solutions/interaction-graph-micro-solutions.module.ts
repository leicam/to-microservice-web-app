import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionGraphMicroSolutionsComponent } from './interaction-graph-micro-solutions/interaction-graph-micro-solutions.component';
import { TreeModule } from 'primeng/tree';
import { InteractionGraphRoutingModule } from './interaction-graph-micro-solutions-routing.module';
import { InteractionFinallyPageRoutingModule } from '../interaction-finally/interaction-finally-page-routing.module';
import { TreeNode } from 'primeng/api';
import { SharedModule } from '../shared/shared.module';
import { ApiService } from '../shared/services/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SidebarModule } from 'primeng/sidebar';
import { SplitterModule } from 'primeng/splitter';
import { DividerModule } from 'primeng/divider';
import { AccordionModule } from 'primeng/accordion';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuModule } from 'primeng/menu';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableMicroSolutionsComponent } from './interaction-graph-micro-solutions/components/table-micro-solutions/table-micro-solutions.component';
import { GraphMicroSolutionsComponent } from './interaction-graph-micro-solutions/components/graph-micro-solutions/graph-micro-solutions.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    InteractionGraphMicroSolutionsComponent,
    TableMicroSolutionsComponent,
    GraphMicroSolutionsComponent,
  ],
  imports: [
    CommonModule,
    TreeModule,
    InteractionGraphRoutingModule,
    InteractionFinallyPageRoutingModule,
    SharedModule,
    HttpClientModule,
    SidebarModule,
    SplitterModule,
    DividerModule,
    AccordionModule,
    PanelMenuModule,
    MenuModule,
    NgxGraphModule,
    CardModule,
    ButtonModule,
    TableModule,
  ],
  providers: [
    ApiService
  ]
})

export class InteractionGraphMicroSolutionsModule { }