import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {

  private mydata:Array<object> = [];

  constructor(private apiservice:ApiService) { }

  ngOnInit() {
    this.apiservice.viewBookdata().subscribe((response:Array<object>)=>{
      console.log(response);
      this.mydata=response;
    });
  }

}
