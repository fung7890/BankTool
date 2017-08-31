import { Injectable } from '@angular/core';
import { topics } from './topic-data';


@Injectable()
export class TopicsService {

  constructor() { }

  getTopics(chosenSubject){
    
      console.log(chosenSubject);
      return topics.slice();
    
  }

 
}
