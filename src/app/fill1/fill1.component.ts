
import { Component, OnInit, Input } from '@angular/core';
import { OverviewComponent } from './../overview/overview.component';
import { ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import { TopicsService } from './../topics.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-fill1',
  templateUrl: './fill1.component.html',
  styleUrls: ['./fill1.component.css']
})
export class Fill1Component implements OnInit {
  activatedRoute: ActivatedRoute;
  topicsService: TopicsService;

  topics = [];

  constructor(activatedRoute: ActivatedRoute, topicsService: TopicsService, private router: Router) {
    this.activatedRoute = activatedRoute;
    this.topicsService = topicsService;
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.topics = this.topicsService.getTopics(params.subject);

      }
    );

  }

  closing(){
    this.router.navigate(['./'], {relativeTo: this.activatedRoute});
  }
}
