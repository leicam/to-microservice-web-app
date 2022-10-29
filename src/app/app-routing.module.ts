import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { MicroserviceCandidateListComponent } from './microservice-candidate-list/microservice-candidate-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'list', component: MicroserviceCandidateListComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }