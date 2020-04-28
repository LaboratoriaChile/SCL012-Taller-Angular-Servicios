import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  counter = 1;

  constructor() { }

  sum(numToAdd){
    this.counter += numToAdd;
  }

  subs(numToSubs){
    this.counter -= numToSubs;
  }
}
