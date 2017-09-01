import { Component, OnInit, Input } from '@angular/core';
import { OverviewComponent } from './../overview/overview.component';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { TopicsService } from './../topics.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-fill2',
  templateUrl: './fill2.component.html',
  styleUrls: ['./fill2.component.css']
})

export class Fill2Component implements OnInit {
  activatedRoute: ActivatedRoute;
  topicsService: TopicsService;

  topics = [];

  constructor(activatedRoute: ActivatedRoute, topicsService: TopicsService) {
    this.activatedRoute = activatedRoute;
    this.topicsService = topicsService;
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.topics = this.topicsService.getIDs(params.id);
      }
    );

  }
}
