import { Injectable } from '@angular/core';
// ensures all components consuming service recevies most up to date data//
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private statusSource = new BehaviorSubject<boolean>(false);
  curentStatus = this.statusSource.asObservable();

  constructor() { }

  changeStatus(status: boolean) {
    this.statusSource.next(status);
  }

}
