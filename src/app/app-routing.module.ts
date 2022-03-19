import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'people',
    loadChildren: () => import('./people/module/people.module').then(m => m.PeopleModule)
  },
  {
    path: 'planets',
    loadChildren: () => import('./planets/module/planets.module').then(m => m.PlanetsModule)
  },
  {
    path: 'starships',
    loadChildren: () => import('./starships/module/starships.module').then(m => m.StarshipsModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    loadChildren: () => import('./work-in-progress/work-in-progress.module').then(m => m.WorkInProgressModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
