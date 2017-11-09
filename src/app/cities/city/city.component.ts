import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { City } from '../city.model';

@Component({
  selector: 'he-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

 @Input() city: City;
 @Output() citySelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.citySelected.emit();
  }

}
