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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
