import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from '../shared/services/api.service';
import { InteractionFinallyPageComponent } from './interaction-finally-page/interaction-finally-page.component';

@NgModule({
  declarations: [InteractionFinallyPageComponent],
  imports: [
      BrowserModule,
    ],
  providers: [ApiService],
})

export class InteractionFinallyModule {}