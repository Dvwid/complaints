import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";



@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'product.name', 'product.sku', 'client.name','client.email','client.phone', 'date'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  filteredValue:string = "";
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }


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

export interface PeriodicElement {
  id: number;
  product: Product;
  client: Client;
  date: string;

}

export interface Product {
  name: string;
  sku: string;
}
export interface Client {
  name: string;
  email: string;
  phone: string;
  adress: Adress;
}

export interface Adress {
  zip: string;
  city: string;
  adress: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, client: {name:"Elżbieta", email: "elzb@example.com", phone: "515284123", adress: {zip: "34300", city:"Paradise", adress:"Brooklyn 34"}}, product: {name: "hammer", sku: "23152"}, date: "2021-05-01"},
  {id: 2, client: {name:"Fijak", email: "fijak@example.com", phone: "681544224", adress: {zip: "34300", city:"Paradise", adress:"Brooklyn 34"}}, product: {name: "driller", sku: "53152"}, date: "2021-05-02"},
  {id: 3, client: {name:"Cecylia", email: "cecylia@example.com", phone: "788421471", adress: {zip: "34300", city:"Paradise", adress:"Brooklyn 34"}}, product: {name: "grinder", sku: "23152"}, date: "2021-05-03"},
  {id: 4, client: {name:"Dawcio", email: "dawcio@example.com", phone: "888985414", adress: {zip: "34300", city:"Paradise", adress:"Brooklyn 34"}}, product: {name: "sander", sku: "43152"}, date: "2021-05-01"},
  {id: 5, client: {name:"Andrzej", email: "andrzej@example.com", phone: "937124782", adress: {zip: "34300", city:"Paradise", adress:"Brooklyn 34"}}, product: {name: "bar", sku: "23152"}, date: "2021-05-05"},
  {id: 6, client: {name:"Barbara", email: "barbara@example.com", phone: "515284123", adress: {zip: "34300", city:"Paradise", adress:"Brooklyn 34"}}, product: {name: "axe", sku: "23212"}, date: "2021-05-01"},
  {id: 7, client: {name:"Elżbieta", email: "elzb@example.com", phone: "515284123", adress: {zip: "34300", city:"Paradise", adress:"Brooklyn 34"}}, product: {name: "hammer", sku: "23152"}, date: "2021-05-01"},
  {id: 8, client: {name:"Fijak", email: "fijak@example.com", phone: "681544224", adress: {zip: "34300", city:"Paradise", adress:"Brooklyn 34"}}, product: {name: "driller", sku: "53152"}, date: "2021-05-02"},
  {id: 9, client: {name:"Cecylia", email: "cecylia@example.com", phone: "788421471", adress: {zip: "34300", city:"Paradise", adress:"Brooklyn 34"}}, product: {name: "grinder", sku: "23152"}, date: "2021-05-03"},
  {id: 10, client: {name:"Dawcio", email: "dawcio@example.com", phone: "888985414", adress: {zip: "34300", city:"Paradise", adress:"Brooklyn 34"}}, product: {name: "sander", sku: "43152"}, date: "2021-05-01"},
  {id: 11, client: {name:"Andrzej", email: "andrzej@example.com", phone: "937124782", adress: {zip: "34300", city:"Paradise", adress:"Brooklyn 34"}}, product: {name: "bar", sku: "23152"}, date: "2021-05-05"},
  {id: 12, client: {name:"Barbara", email: "barbara@example.com", phone: "515284123", adress: {zip: "34300", city:"Paradise", adress:"Brooklyn 34"}}, product: {name: "axe", sku: "23212"}, date: "2021-05-01"},
];
