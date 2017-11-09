import { Component, OnInit } from '@angular/core';
import { City } from './city.model';

@Component({
  selector: 'he-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  selectedCity: City;

  constructor() { }

  ngOnInit() {
  }

  cityWasSelected(city: City) {
    console.log('Here' + city);
    this.selectedCity = city;
  }
}
