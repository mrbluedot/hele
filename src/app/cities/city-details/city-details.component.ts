import { Component, OnInit, Input } from '@angular/core';
import { City } from '../city.model';

@Component({
  selector: 'he-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent implements OnInit {

  @Input() city: City;
  constructor() { }

  ngOnInit() {
  }

}
