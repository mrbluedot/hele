import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'he-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() featureSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(feature: string) {
    this.featureSelected.emit(feature);
  }

}
