import {Component, Input, OnInit} from '@angular/core';
import {Attraction} from '../../../../core/model/Attraction';
import {Place} from '../../../../core/model/Place';

@Component({
  selector: 'app-overview-attractions',
  templateUrl: './overview-attractions-for-all.component.html',
  styleUrls: ['./overview-attractions-for-all.component.css']
})
export class OverviewAttractionsForAllComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('attractions')
  attractions: Attraction[];

  // tslint:disable-next-line:no-input-rename
  @Input('places')
  places: Place[];

  isVisibleCheck = false;
  isVisible = false;

  constructor() { }

  check() {
    this.isVisibleCheck = true;
  }
  checkOption() {
    if (this.isVisibleCheck) {
      this.isVisible = true;
    }
  }
  onSubmitAttraction() {
    console.log('Atrakcje: ' + this.attractions);
  }

  onSubmitCity() {
    console.log('Miejsca: ' + this.places);
  }

  ngOnInit() {
  }

}
