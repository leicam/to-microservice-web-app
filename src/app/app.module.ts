import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MicroserviceCandidateListComponent } from './microservice-candidate-list/microservice-candidate-list.component';
import { MicroserviceCandidateCardComponent } from './microservice-candidate-card/microservice-candidate-card.component';
import { PoModule } from '@po-ui/ng-components';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MicroserviceCandidateListComponent,
    MicroserviceCandidateCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    PoModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
