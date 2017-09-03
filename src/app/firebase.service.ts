// import { Injectable } from '@angular/core';
// import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

// @Injectable()
// export class FirebaseService {

//   topics: FirebaseListObservable<any[]>;
//   topic: FirebaseObjectObservable<any>;

//   constructor(private af: AngularFireDatabase) { }

//   getTopics() {
//     this.topics = this.af.list('/topics') as FirebaseListObservable<Topic[]>;
//     return this.topics;
//   }

//   getSubjectById(subjectId: string) {
//     return this.af.object('/topics/' + subjectId);
//   }

//   // updateSubject(){

//   // }
// }


