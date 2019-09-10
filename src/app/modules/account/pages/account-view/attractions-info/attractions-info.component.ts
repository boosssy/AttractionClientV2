import { Component, OnInit } from '@angular/core';
import {Attraction} from "../../../../../core/model/Attraction";

@Component({
  selector: 'app-attractions-info',
  templateUrl: './attractions-info.component.html',
  styleUrls: ['./attractions-info.component.css']
})
export class AttractionsInfoComponent implements OnInit {

  attractions: Attraction[];


  constructor() { }

  //todo wraca do przegladu atrakcji w miescie barcelona
  back() {

  }
  ngOnInit() {
  }

}
