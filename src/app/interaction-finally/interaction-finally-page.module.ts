import { NgModule } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { InteractionFinallyPageComponent } from './interaction-finally-page/interaction-finally-page.component';

@NgModule({
  declarations: [InteractionFinallyPageComponent],
  imports: [],
  providers: [ApiService],
})

export class InteractionFinallyModule {}