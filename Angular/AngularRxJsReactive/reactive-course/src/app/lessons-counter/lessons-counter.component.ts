import { Component, OnInit } from '@angular/core';
import { globalEventBus, LESSONS_LIST_AVAILABLE,ADD_NEW_LESSON } from '../event-bus-experiments/event-bus';
import { Lesson } from '../shared/Models/lesson';

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.css']
})
export class LessonsCounterComponent {

  lessonCounter = 0;
  constructor() { 
    console.log('Lesson list component is registed as observer');
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE,  this);

    globalEventBus.registerObserver(ADD_NEW_LESSON,  {
      notify : lessonText => this.lessonCounter += 1
    });

  }

  notify(data: Lesson[]){
    console.log('counter component recieved data ..');
    this.lessonCounter = data.length;
  }

}
