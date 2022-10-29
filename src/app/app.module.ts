import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MicroserviceCandidateListComponent } from './microservice-candidate-list/microservice-candidate-list.component';
import { MicroserviceCandidateCardComponent } from './microservice-candidate-card/microservice-candidate-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MicroserviceCandidateListComponent,
    MicroserviceCandidateCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
