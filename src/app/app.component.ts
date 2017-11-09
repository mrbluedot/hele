import { Component } from '@angular/core';

@Component({
  selector: 'he-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hele';
  loadedFeature = 'cities';

  onNavigage(feature: string) {
    this.loadedFeature = feature;

  }
}
