import { Component, OnInit } from '@angular/core';
import { GetApiService } from "../services/get-api.service";



@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss']
})

export class ComplaintsComponent implements OnInit {

  constructor(private getApi: GetApiService) { }
  showFiller:boolean = false;
  showNotifications:boolean = false;

  ngOnInit(): void {
    this.getApi.getComplaints().subscribe(
      data => console.log(data),
      error => console.log(error.message)
    )
  }

}
