import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetApiService {
  private baseUrl:string = "http://localhost:3000/complaints"
  private options = {
    headers: {
      "Content-Type": "application/json",
    }
  }
  constructor(private http: HttpClient) { }

  getComplaints(){
    return this.http.get(this.baseUrl, this.options)
  }

}
