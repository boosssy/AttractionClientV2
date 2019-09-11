import { Component, OnInit } from '@angular/core';
import {Attraction} from "../../../../core/model/Attraction";
import {Place} from "../../../../core/model/Place";
import {MainSevice} from "../../../../core/sevice/MainSevice";

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css']
})
export class AccountViewComponent implements OnInit {

  attractions: Attraction[];
  places: Place[];
  attraction: Attraction;


  tmpPlaceId: string;
  tmpPlaceName: string;
  // isVisibleCity = true;
  isVisibleAttraction = false;

  constructor(private mainService: MainSevice) { }

  setPlaceParameters(place: Place) {
    this.tmpPlaceId = place.id;
    this.tmpPlaceName = place.city;
  }

  confirmCity() {
    // this.isVisibleCity = false;
    this.isVisibleAttraction = true;
    this.mainService.findAllAttractionsByPlaceId(this.tmpPlaceId).subscribe( data => {
      this.attractions = data;
    });
  }

  back() {
    // this.isVisibleCity = true;
    this.isVisibleAttraction = false;
  }

  ngOnInit() {
    this.mainService.findAllPlaces().subscribe( data => {
      this.places = data;
    });
  }

  //---------------------------- BARCELONA -------------------------------
  //todo przechodzi do komponentu
  showInfomationBarcelona() {
    location.assign('/information/barcelona');
  }

  //---------------------------- Warsaw -------------------------------
  //todo przechodzi do komponentu
  showInfomationWarsaw() {
    location.assign('/information/warsaw');
  }
}
