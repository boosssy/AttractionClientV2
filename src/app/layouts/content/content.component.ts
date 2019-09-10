import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  // todo pobrac status z login.component.ts
  status = true;

  constructor() { }

  ngOnInit() {
  }

}
