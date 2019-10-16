import { Component, OnInit } from '@angular/core';
import { globalEventBus, Observer, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON } from '../event-bus-experiments/event-bus';
import { Lesson } from '../shared/Models/lesson';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit , Observer{

  lessons: Lesson[] = [];
  constructor(){
    console.log('Lesson list component is registed as observer');
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE,  this);
    console.log('Lesson list component is registed as observer for adding data');
    globalEventBus.registerObserver(ADD_NEW_LESSON, {
      notify : lessonText => {
        this.lessons.push({
            id : Math.random(),
            description : lessonText
        })
      }
    })
  }

  notify(data: Lesson[]) {
    console.log('Lessons List component recived data');
    this.lessons  = data;
  }

  toggleLessonViewed(lesson:Lesson){
    console.log('Lesson list component recieved data ..');
    lesson.completed = !lesson.completed;
  }
  
  ngOnInit() {
    // console.log('Lesson list component is registed as observer');
    // globalEventBus.registerObserver(this);
  }

}
