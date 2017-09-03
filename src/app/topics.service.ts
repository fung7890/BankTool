import { Injectable } from '@angular/core';

// import { topics } from './topic-data';


@Injectable()
export class TopicsService {

  private topics = [
    {subject: 'introduction', title: 'Introductory Letter', id: '0',
    content1: `Lets complete the most important part of your business plan!
    Write down a summary of your plan by covering the following important
    questions. You can always come back to this section after you complete the process`, content: ''},

    {subject: 'introduction', title: 'Cover Page', content1: 'introduction2', id: '1', content: ''},
    {subject: 'introduction', title: 'Executive Summary', content1: 'introduction3', id: '2', content: ''},

    {subject: 'marketing', content1: 'WHAT WHAT WHAT', id: '3', content: ''},
    {subject: 'marketing', content1: 'marketing2', id: '4', content: ''},
    {subject: 'marketing', content1: 'marketing3', id: '5', content: ''},

    {subject: 'team', content1: 'team1', id: '6', content: ''},
    {subject: 'team', content1: 'team2', id: '7', content: ''},
    {subject: 'team', content1: 'team3', id: '8', content: ''},

    {subject: 'environment', content1: 'BE1', id: '9', content: ''},
    {subject: 'environment', content1: 'BE2', id: '10', content: ''},
    {subject: 'environment', content1: 'BE3', id: '11', content: ''},

    {subject: 'operation', content1: 'OP1' , id: '12', content: ''},
    {subject: 'operation', content1: 'OP2', id: '13' , content: ''},
    {subject: 'operation', content1: 'OP3', id: '14' , content: ''},

    {subject: 'finance', content1: 'Fin1' , id: '15', content: ''},
    {subject: 'finance', content1: 'Fin2', id: '16' , content: ''},
    {subject: 'finance', content1: 'Fin3', id: '17' , content: ''},

    {subject: 'risk', content1: 'risk1' , id: '18', content: ''},
    {subject: 'risk', content1: 'risk2', id: '19' , content: ''},
    {subject: 'risk', content1: 'risk3', id: '20' , content: ''},

  ];

  constructor() { }

  getTopics(chosenSubject) {

    return this.topics.filter((sub) => {
      return sub.subject === chosenSubject;
    });

  }

  getIDs(chosenID) {

    return this.topics.filter((sub) => {
      return  sub.id === chosenID;
    });

  }

}
