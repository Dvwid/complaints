import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplaintsRoutingModule } from './complaints-routing.module';
import { ComplaintsComponent } from './complaints.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from "@angular/material/button";

import { MatTableModule } from '@angular/material/table';
import { DataTableComponent } from "../data-table/data-table.component";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from "@angular/material/sort";
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    ComplaintsComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    ComplaintsRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSortModule,
    MatIconModule,
    MatCardModule
  ]
})
export class ComplaintsModule { }
