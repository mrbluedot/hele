import { Component, OnInit } from '@angular/core';
import { Activity } from './activity/activity.model';

@Component({
  selector: 'he-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  newActivity: Activity;

  constructor() { }

  ngOnInit() {
  }

  onActivityAdded(activity: Activity) {
    this.newActivity = activity;
  }
}
