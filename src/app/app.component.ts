import { Component, OnInit } from '@angular/core';
import { AuthService } from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'complaints';
  constructor(private auth: AuthService) {
  }
  ngOnInit() {
    console.log("Sign with Token")
    this.auth.signInWithLocalStorage()
    // const token:string | null = localStorage.getItem('Complaints-Auth-Token')
    // if(token) this.auth.signInWithToken(token).subscribe(data => console.log(data))
  }
}
