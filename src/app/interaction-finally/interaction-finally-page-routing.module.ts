import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteractionFinallyPageComponent } from './interaction-finally-page/interaction-finally-page.component';

const routes: Routes = [
  {
    path: '',
    component: InteractionFinallyPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class InteractionFinallyPageRoutingModule {}