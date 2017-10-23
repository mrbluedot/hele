import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityListEditComponent } from './activity-list-edit.component';

describe('ActivityListEditComponent', () => {
  let component: ActivityListEditComponent;
  let fixture: ComponentFixture<ActivityListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
