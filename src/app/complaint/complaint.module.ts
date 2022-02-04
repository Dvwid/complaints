import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplaintRoutingModule } from './complaint-routing.module';
import { ComplaintComponent } from './complaint.component';


@NgModule({
  declarations: [
    ComplaintComponent
  ],
  imports: [
    CommonModule,
    ComplaintRoutingModule
  ]
})
export class ComplaintModule { }
