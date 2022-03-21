import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from '../component/people.component';
import { FilterModule } from 'src/app/shared/module/filter.module';

@NgModule({
  declarations: [
    PeopleComponent,
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    FilterModule
  ]
})
export class PeopleModule { }
