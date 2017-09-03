import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  @Output() changed = new EventEmitter<boolean>();


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
    console.log('toggled');
  }


}
