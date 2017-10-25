import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'he-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

  activities = [];
  constructor() { }

  ngOnInit() {
  }

}
