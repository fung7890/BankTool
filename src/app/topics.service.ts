import { Injectable } from '@angular/core';

// import { topics } from './topic-data';


@Injectable()
export class TopicsService {

  private topics = [
    {subject: 'introduction', title: 'Introductory Letter', rel: 3 , id: '0',
    content1: `Lets complete the most important part of your business plan!
    Write down a summary of your plan by covering the following important
    questions. You can always come back to this section after you complete the process`, content: '',
    pa: `Treat this section as an elevator pitch for your business. This will help
    you present your company in a brief, persuasive speech to spark interest in what your company does
    Treat this section as an elevator pitch for your business. This will help
    you present your company in a brief, persuasive speech to spark interest in what your company does
    Treat this section as an elevator pitch for your business. This will help
    you present your company in a brief, persuasive speech to spark interest in what your company does`},

    {subject: 'introduction', title: 'Cover Page', content1: 'introduction2', rel: 2 , id: '1', content: '', pa: `PA TEST2 `},
    {subject: 'introduction', title: 'Executive Summary', content1: 'introduction3', rel: 1 , id: '2', content: '', pa: ` `},

    {subject: 'marketing', title: 'Customer Buying Behaviour', content1: 'WHAT WHAT WHAT', rel: 3 , id: '3', content: '', pa: ` `},
    {subject: 'marketing', title: 'Profiles of Target Customers', content1: 'marketing2', rel: 3 , id: '4', content: '', pa: ` `},
    {subject: 'marketing', title: 'General Strategy', content1: 'marketing3', rel: 3 , id: '5', content: '', pa: ` `},

    {subject: 'team', title: 'Salary', content1: 'team1', rel: 3 , id: '6', content: '', pa: ` `},
    {subject: 'team', title: 'Incentives', content1: 'team2', rel: 3 , id: '7', content: '', pa: ` `},
    {subject: 'team', title: 'Skills', content1: 'team3', rel: 3 , id: '8', content: '', pa: ` `},

    {subject: 'environment', title: 'SWOT', content1: 'BE1', rel: 3 , id: '9', content: '', pa: ` `},
    {subject: 'environment', title: 'Location', content1: 'BE2', rel: 3 , id: '10', content: '', pa: ` `},
    {subject: 'environment', title: 'Is there a Market?', content1: 'BE3', rel: 3 , id: '11', content: '', pa: ` `},

    {subject: 'operation', title: 'Distribution Model', content1: 'OP1' , rel: 3 , id: '12', content: '', pa: ` `},
    {subject: 'operation', title: 'Contracts', content1: 'OP2', rel: 3 , id: '13' , content: '', pa: ` `},
    {subject: 'operation', title: 'Competition Models', content1: 'OP3', rel: 3 , id: '14' , content: '', pa: ` `},

    {subject: 'finance', title: 'Break-Even Analysis', content1: 'Fin1' , rel: 3 , id: '15', content: '', pa: ` `},
    {subject: 'finance', title: 'Cash Flow Forecast', content1: 'Fin2', rel: 3 , id: '16' , content: '', pa: ` `},
    {subject: 'finance', title: 'Current Assets', content1: 'Fin3', rel: 3 , id: '17' , content: '', pa: ` `},

    {subject: 'risk', title: 'Market Outlook', content1: 'risk1' , rel: 3 , id: '18', content: '', pa: ` `},
    {subject: 'risk', title: 'Personal', content1: 'risk2', rel: 3 , id: '19' , content: '', pa: ` `},
    {subject: 'risk', title: 'Other Risks', content1: 'risk3', rel: 3 , id: '20' , content: '', pa: ` `},

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
