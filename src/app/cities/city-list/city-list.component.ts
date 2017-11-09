import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { City } from '../city.model';

@Component({
  selector: 'he-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

  @Output() citySelected = new EventEmitter<City>();

  cities: City[] = [
    new City('Seattle', 'Rainy city', 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Seattle_from_Kerry_Park_%281%29.jpg'),
    new City('Vancouver', 'Lovely city', 'https://upload.wikimedia.org/wikipedia/commons/8/80/English_Bay%2C_Vancouver%2C_BC.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onCitySelected(city: City) {
    console.log(city);
    this.citySelected.emit(city);
  }

}
