import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input } from '@angular/core';
import { OverviewComponent } from './../overview/overview.component'
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { TopicsService } from './../topics.service';

@Component({
  selector: 'app-fill1',
  templateUrl: './fill1.component.html',
  styleUrls: ['./fill1.component.css']
})
export class Fill1Component implements OnInit {
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
        this.topics = this.topicsService.getTopics(params.side);

      }
    )

  }
}
