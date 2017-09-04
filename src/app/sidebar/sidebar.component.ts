import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  status: boolean;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.curentStatus.subscribe(status => this.status = status);
  }

  onChange(changedStatus: boolean) {
    this.data.changeStatus(changedStatus);
  }
}
