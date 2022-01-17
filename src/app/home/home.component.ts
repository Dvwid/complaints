import { Component, OnInit } from '@angular/core';
import {GetApiService} from "../services/get-api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private getApi: GetApiService) { }

  ngOnInit(): void {
    this.getApi.getComplaints().subscribe(
      data => console.log(data)
    )
  }

}
