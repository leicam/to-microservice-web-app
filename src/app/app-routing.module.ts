import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'location',
    pathMatch: 'full',
  },
  {
    path: 'interaction',
    loadChildren: () =>
      import('./interaction/interaction.module').then(
        (interaction) => interaction.InteractionModule
      ),
  },
  {
    path: 'interaction-graph',
    loadChildren: () =>
      import(
        './interaction-graph-micro-solutions/interaction-graph-micro-solutions.module'
      ).then(
        (interactionGraph) =>
          interactionGraph.InteractionGraphMicroSolutionsModule
      ),
  },
  {
    path: 'interaction-finally',
    loadChildren: () =>
      import(
        './interaction-finally/interaction-finally-page.module'
      ).then(
        (interactionFinally) =>
        interactionFinally.InteractionFinallyModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
