import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Activity } from '../activity/activity.model';

@Component({
  selector: 'he-activity-list-edit',
  templateUrl: './activity-list-edit.component.html',
  styleUrls: ['./activity-list-edit.component.scss']
})
export class ActivityListEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('costInput') costInputRef: ElementRef;
  @Output() activityAdded = new EventEmitter<Activity>();

  constructor() { }

  ngOnInit() {
  }

  onAddActivity() {
    this.activityAdded.emit(
    new Activity(this.nameInputRef.nativeElement.value,
                this.costInputRef.nativeElement.value
            ));
  }

}
