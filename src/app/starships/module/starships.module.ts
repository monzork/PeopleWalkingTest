import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipsRoutingModule } from './starships-routing.module';
import { StarshipsComponent } from '../component/starships.component';
import { FilterModule } from 'src/app/shared/module/filter.module';


@NgModule({
  declarations: [
    StarshipsComponent,
  ],
  imports: [
    CommonModule,
    StarshipsRoutingModule,
    FilterModule
  ]
})
export class StarshipsModule { }
