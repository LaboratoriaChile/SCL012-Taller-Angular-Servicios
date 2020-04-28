import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-subs',
  templateUrl: './subs.component.html',
  styleUrls: ['./subs.component.css']
})
export class SubsComponent implements OnInit {

  constructor(public calcService:DataService) { }

  ngOnInit(): void {

  }

  doSubs(){
    this.calcService.subs(1);
  }
}
