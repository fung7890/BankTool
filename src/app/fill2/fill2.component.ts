import { Component, OnInit, Input } from '@angular/core';
import { OverviewComponent } from './../overview/overview.component';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { TopicsService } from './../topics.service';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Fill1Component } from './../fill1/fill1.component';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { DataService } from '../data.service';



@Component({
  selector: 'app-fill2',
  templateUrl: './fill2.component.html',
  styleUrls: ['./fill2.component.css']
})

export class Fill2Component implements OnInit {

  items: FirebaseListObservable<any[]>;
  item: FirebaseObjectObservable<any>;

  c0: FirebaseObjectObservable<any>;
  c1: FirebaseObjectObservable<any>;
  c2: FirebaseObjectObservable<any>;
  c3: FirebaseObjectObservable<any>;
  c4: FirebaseObjectObservable<any>;
  c5: FirebaseObjectObservable<any>;
  c6: FirebaseObjectObservable<any>;
  c7: FirebaseObjectObservable<any>;
  c8: FirebaseObjectObservable<any>;
  c9: FirebaseObjectObservable<any>;
  c10: FirebaseObjectObservable<any>;
  c11: FirebaseObjectObservable<any>;
  c12: FirebaseObjectObservable<any>;
  c13: FirebaseObjectObservable<any>;
  c14: FirebaseObjectObservable<any>;
  c15: FirebaseObjectObservable<any>;
  c16: FirebaseObjectObservable<any>;
  c17: FirebaseObjectObservable<any>;
  c18: FirebaseObjectObservable<any>;
  c19: FirebaseObjectObservable<any>;
  c20: FirebaseObjectObservable<any>;

  activatedRoute: ActivatedRoute;
  topicsService: TopicsService;

  topics= [];
  id: any;
  subjects: any;
  status: boolean;
  pa = [];

  constructor(activatedRoute: ActivatedRoute, topicsService: TopicsService,
    public af: AngularFireDatabase, private data: DataService) {
    this.activatedRoute = activatedRoute;
    this.topicsService = topicsService;
    this.c0 = af.object('/topics/0');
    this.c1 = af.object('/topics/1');
    this.c2 = af.object('/topics/2');
    this.c3 = af.object('/topics/3');
    this.c4 = af.object('/topics/4');
    this.c5 = af.object('/topics/5');
    this.c6 = af.object('/topics/6');
    this.c7 = af.object('/topics/7');
    this.c8 = af.object('/topics/8');
    this.c9 = af.object('/topics/9');
    this.c10 = af.object('/topics/10');
    this.c11 = af.object('/topics/11');
    this.c12 = af.object('/topics/12');
    this.c13 = af.object('/topics/13');
    this.c14 = af.object('/topics/14');
    this.c15 = af.object('/topics/15');
    this.c16 = af.object('/topics/16');
    this.c17 = af.object('/topics/17');
    this.c18 = af.object('/topics/18');
    this.c19 = af.object('/topics/19');
    this.c20 = af.object('/topics/20');
   }

  ngOnInit() {

    this.data.curentStatus.subscribe(status => this.status = status);

    this.activatedRoute.params.subscribe(
      (params) => {
        this.topics = this.topicsService.getIDs(params.id);
        console.log(this.activatedRoute.snapshot.params.id.toString());
      }
    );


  }

  Send(desc: string, subjectId: string) {
    this.af.object('/topics/' + subjectId).update({ content: desc});
    console.log(this.status);
  }




}
