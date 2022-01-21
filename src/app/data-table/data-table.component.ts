import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { ELEMENT_DATA } from "../PeriodicElement";
import { PeriodicElement } from "../PeriodicElement";


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = [];

  dataSource = new MatTableDataSource<PeriodicElement>([]);
  filteredValue:string = "";

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth < 1024){
      this.displayedColumns = ['id', 'product.sku', 'client.name', 'done'];
    } else {
      this.displayedColumns = ['id', 'product.name', 'product.sku', 'client.name','client.email','client.phone', 'date', 'done'];
    };
    this.dataSource = new MatTableDataSource(ELEMENT_DATA)
  }

  ngAfterViewInit(): void {
    this.dataSource.sortingDataAccessor = (item,property) => {
      switch(property){
        case 'id':return item.id;
        case 'product.name': return item.product.name;
        case 'product.sku': return item.product.sku;
        case 'client.name': return item.client.name;
        case 'client.email': return item.client.email;
        case 'client.phone': return item.client.phone;
        case 'date': return item.date;
        case 'done': return item.done.toString();
        default: return property;
      }
    }
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
  }

  applyFilter(){

    // this.dataSource.filter = this.filteredValue.trim().toLowerCase()
    const filteredData = ELEMENT_DATA.filter(el => {
      if(el.product.name.toLowerCase().includes(this.filteredValue.trim().toLowerCase())) return el
      if(el.product.sku.toLowerCase().includes(this.filteredValue.trim().toLowerCase())) return el
      if(el.client.name.toLowerCase().includes(this.filteredValue.trim().toLowerCase())) return el
      if(el.client.email.toLowerCase().includes(this.filteredValue.trim().toLowerCase())) return el
      if(this.filteredValue === "") return ELEMENT_DATA
      else return null
    })
    this.dataSource = new MatTableDataSource(filteredData);
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
  }
}





