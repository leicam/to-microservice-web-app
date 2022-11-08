import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteractionRoutingModule } from './interaction-routing.module';
import { InteractionMicroSolutionsComponent } from './interaction-micro-solutions/interaction-micro-solutions.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { PanelModule } from 'primeng/panel';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { SharedModule } from '../shared/shared.module';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [InteractionMicroSolutionsComponent],
  imports: [
    CommonModule,
    InteractionRoutingModule,
    SharedModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    AvatarModule,
    PanelModule,
    MenuModule,
    BrowserAnimationsModule,
    InputNumberModule,
    CheckboxModule,
    ToastModule,
  ],
})
export class InteractionModule {}
