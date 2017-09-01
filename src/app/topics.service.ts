import { Injectable } from '@angular/core';

// import { topics } from './topic-data';


@Injectable()
export class TopicsService {

  private topics = [
    {subject: 'introduction', title: 'Introductory Letter', id: 'introduction1',
    content: `Lets complete the most important part of your business plan!
    Write down a summary of your plan by covering the following important
    questions. You can always come back to this section after you complete the process`},

    {subject: 'introduction', title: 'Cover Page', content: 'introduction2', id: 'introduction2'},
    {subject: 'introduction', title: 'Executive Summary', content: 'introduction3', id: 'introduction3'},

    {subject: 'marketing', content: 'WHAT WHAT WHAT', id: 'marketing1'},
    {subject: 'marketing', content: 'marketing2', id: 'marketing2'},
    {subject: 'marketing', content: 'marketing3', id: 'marketing3'},

    {subject: 'team', content: 'team1', id: 'team1'},
    {subject: 'team', content: 'team2', id: 'team2'},
    {subject: 'team', content: 'team3', id: 'team3'},

    {subject: 'environment', content: 'BE1', id: 'BE1'},
    {subject: 'environment', content: 'BE2', id: 'BE2'},
    {subject: 'environment', content: 'BE3', id: 'BE3'},

    {subject: 'operation', content: 'OP1' , id: 'OP1'},
    {subject: 'operation', content: 'OP2', id: 'OP2' },
    {subject: 'operation', content: 'OP3', id: 'OP3' },

    {subject: 'finance', content: 'Fin1' , id: 'Fin1'},
    {subject: 'finance', content: 'Fin2', id: 'Fin2' },
    {subject: 'finance', content: 'Fin3', id: 'Fin3' },

    {subject: 'risk', content: 'risk1' , id: 'risk1'},
    {subject: 'risk', content: 'risk2', id: 'risk2' },
    {subject: 'risk', content: 'risk3', id: 'risk3' },

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
