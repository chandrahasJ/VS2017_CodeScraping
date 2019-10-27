import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  values: any;
  private REST_API_SERVER = "http://localhost:5000/api/values";
  constructor(private http: HttpClient) { } 

  ngOnInit() {
   this.getValues();
  }

  getValues() {
    this.http.get(this.REST_API_SERVER).subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }

}
