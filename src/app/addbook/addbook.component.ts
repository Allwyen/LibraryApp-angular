import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  private mydata:Array<object> = [];

  constructor(private apiservice:ApiService) { }

  onSubmit(data:NgForm)
  {
    this.apiservice.addBookdata(data.value).subscribe((response:Array<object>)=>{
      console.log(response);
    });
  }

  ngOnInit() {
  }

}
