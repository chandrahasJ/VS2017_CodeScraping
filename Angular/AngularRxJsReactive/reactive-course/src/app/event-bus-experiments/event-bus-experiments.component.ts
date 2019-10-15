import { Component, OnInit } from '@angular/core';
import { globalEventBus, LESSONS_LIST_AVAILABLE } from './event-bus';
import { testdata } from '../shared/Models/testdata';

@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Top Level Component broadcasted all lessons....');
    globalEventBus.notifyObserver(LESSONS_LIST_AVAILABLE, testdata.slice(0)) ;
  }

}
