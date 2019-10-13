import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'browser-events-exp',
templateUrl: './browser-events-exp.component.html',
  styleUrls: ['./browser-events-exp.component.css']
})
export class BrowserEventsExpComponent implements OnInit {

  hoverSection : HTMLElement;

  ngOnInit() {
    this.hoverSection = document.getElementById("divHover");
    this.hoverSection.addEventListener("mousemove", OnMouseMove);
  }

  Subscribe(){
    console.clear();
    console.log("Sub called");
    this.hoverSection.addEventListener("mousemove", OnMouseMove);
  }

  UnSubscribe(){
    console.clear();
    console.log("UnSub called");
    this.hoverSection.removeEventListener("mousemove", OnMouseMove);
  }
}

function  OnMouseMove(ev : MouseEvent){
  console.log(ev);
}
