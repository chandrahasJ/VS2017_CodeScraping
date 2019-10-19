import { Component, OnInit } from '@angular/core';
import { globalEventBus, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON } from './event-bus';
import { testdata } from '../shared/Models/testdata';
import { Lesson } from '../shared/Models/lesson';

@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {

  constructor() { }

  private Lessons : Lesson[] = [];

  ngOnInit() {
    console.log('Top Level Component broadcasted all lessons....');
    this.Lessons = testdata.slice(0)
    globalEventBus.notifyObserver(LESSONS_LIST_AVAILABLE,  this.Lessons) ;

    setInterval(() => {
        this.Lessons.push({
          id : Math.random(),
          description : 'New Lessons ' +Math.random()
        });

        globalEventBus.notifyObserver(LESSONS_LIST_AVAILABLE,  this.Lessons) ;
    }, 10000)  
  }

  addLesson(lessonText:string){
    globalEventBus.notifyObserver(ADD_NEW_LESSON, lessonText);
  }

}
