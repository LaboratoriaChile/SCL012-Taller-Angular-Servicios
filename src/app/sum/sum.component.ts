import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})
export class SumComponent implements OnInit {

  constructor(public calcService:DataService) { }

  ngOnInit(): void {
  }

  doSum(){
    this.calcService.sum(1);
  }
}
