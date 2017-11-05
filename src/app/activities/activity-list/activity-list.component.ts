import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity/activity.model';

@Component({
  selector: 'he-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

  activities: Activity[] = [
    new Activity('See Space Needle', 30),
    new Activity('Visit Aquarium', 20),
  ];

  constructor() { }

  ngOnInit() {
  }

}
