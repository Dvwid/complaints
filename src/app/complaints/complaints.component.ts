import { Component, OnInit } from '@angular/core';
import { GetApiService } from "../services/get-api.service";



@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss']
})

export class ComplaintsComponent implements OnInit {

  constructor(private getApi: GetApiService) { }

  showNotifications:boolean = false;

  ngOnInit(): void {

  }

}
