import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionGraphMicroSolutionsComponent } from './interaction-graph-micro-solutions/interaction-graph-micro-solutions.component';
import {TreeModule} from 'primeng/tree';
import { InteractionGraphRoutingModule } from './interaction-graph-micro-solutions-routing.module';
import {TreeNode} from 'primeng/api';
import { SharedModule } from '../shared/shared.module';
import { ApiService } from '../shared/services/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {SidebarModule} from 'primeng/sidebar';
import {SplitterModule} from 'primeng/splitter';
import {DividerModule} from 'primeng/divider';
import { TreeComponent } from './interaction-graph-micro-solutions/components/tree/tree.component';
import {AccordionModule} from 'primeng/accordion';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuModule } from 'primeng/menu';
import { NgxGraphModule } from '@swimlane/ngx-graph';

@NgModule({
  declarations: [
    InteractionGraphMicroSolutionsComponent,
    TreeComponent
  ],
  imports: [
    CommonModule,
    TreeModule,
    InteractionGraphRoutingModule,
    SharedModule,
    HttpClientModule,
    SidebarModule,
    SplitterModule,
    DividerModule,
    AccordionModule,
    PanelMenuModule,
    MenuModule,
    NgxGraphModule,    
  ],
  providers: [
    ApiService
  ]
})
export class InteractionGraphMicroSolutionsModule { }
