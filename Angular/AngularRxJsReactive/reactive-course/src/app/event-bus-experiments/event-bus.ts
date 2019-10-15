
import * as _ from 'lodash';

export interface Observer{
        notify(data:any);
}

export const LESSONS_LIST_AVAILABLE = 'NEW_LIST_AVAIABLE';

export const ADD_NEW_LESSON = 'ADD_NEW_LESSON';

interface Subject{
    registerObserver(EventType: string, obs:Observer);
    unregisterObserver(EventType: string, obs:Observer);
    notifyObserver(EventType: string, data:any);
}

class EventBus implements Subject{

    private observers : {[key:string]: Observer[]} = {};

    registerObserver(EventType: string, obs: Observer) {
        this.observerPerEventType(EventType).push(obs);
    }    
    
    unregisterObserver(EventType: string, obs: Observer) {
        _.remove(this.observerPerEventType(EventType), el => {
            return el === obs;
        });
    }

    notifyObserver(EventType: string, data: any) {
        this.observerPerEventType(EventType).forEach(obs => obs.notify(data));
    }

    private observerPerEventType(eventType:string): Observer[]{
        const observerPerType = this.observers[eventType];
        if(!observerPerType){
            this.observers[eventType] = [];
        }
        return this.observers[eventType];
    }
}

export const globalEventBus = new EventBus();