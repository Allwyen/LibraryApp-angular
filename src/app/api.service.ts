import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addBookdata(data)
  {
    return this.http.post("https://libraryappnodejs.herokuapp.com/insertbook",data);
  }
  viewBookdata()
  {
    return this.http.get("https://libraryappnodejs.herokuapp.com/viewbook");
  }
}
