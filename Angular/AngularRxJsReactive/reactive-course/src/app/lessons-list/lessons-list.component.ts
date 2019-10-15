import { Component, OnInit } from '@angular/core';
import { globalEventBus, Observer, LESSONS_LIST_AVAILABLE } from '../event-bus-experiments/event-bus';
import { Lesson } from '../shared/Models/lesson';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit , Observer{

  constructor(){
    console.log('Lesson list component is registed as observer');
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE,  this);
  }
  lessons: Lesson[] = [];

  notify(data: Lesson[]) {
    console.log('Lessons List component recived data');
    this.lessons  = data;
  }
  
  ngOnInit() {
    // console.log('Lesson list component is registed as observer');
    // globalEventBus.registerObserver(this);
  }

}
