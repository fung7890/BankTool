import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  @Output() changed = new EventEmitter<string>();


  subjects = [
    'introduction',
    'team',
    'environment',
    'marketing',
    'operation',
    'finance',
    'risk'
  ];
  constructor(){}

  ngOnInit() {

  }

  onChange(){
    this.changed.emit('emit working');
  }


}
